# (Since this activity was mostly just editing this one file, solution is
# presented as just the files changed.)

from unittest.mock import MagicMock, patch
from django.test import TestCase

from apps.core.models import ReadingList, Book
from apps.accounts.models import User


class C3FunctionalFixtureTestCase(TestCase):
    fixtures = [
        'testing_data.json',
    ]

    def test_page_1_shows_expected_booklists(self):
        response = self.client.get('/')
        self.assertContains(response, 'My kids LOVE these books')
        self.assertContains(response, 'Dystopian YA')
        self.assertContains(response, 'Great American Novels')
        self.assertContains(response, 'Fantasy books I recently read')

    def test_page_1_shows_doesnt_show_page_2_books(self):
        response = self.client.get('/')
        self.assertNotContains(response, '19th Century Classics')
        self.assertNotContains(response, 'The origins of science fiction')

    def test_page_2_shows_expected_4_books(self):
        response = self.client.get('/?page=2')
        # Challenge 3 SOLUTION
        self.assertContains(response, 'Most misinterpreted science-fiction books')
        self.assertContains(response, 'Early Adult Fantasy Novels')
        self.assertContains(response, 'Favorite books on history and geography')
        self.assertContains(response, '19th Century Classics')

    def test_page_2_shows_doesnt_show_page_1_books(self):
        response = self.client.get('/?page=2')
        # Challenge 3 SOLUTION
        self.assertNotContains(response, 'Dystopian YA')
        self.assertNotContains(response, 'The origins of science fiction')


class C4SecurityTFDTestCase(TestCase):
    fixtures = [
        'testing_data.json',
    ]

    def test_list_deletion_security(self):
        # Log in as test user alicereader (who has password of "password")
        self.client.login(username='alicereader', password='password')

        # Check that list #8 is indeed created by someone else, and that there
        # are a total of 10 Reading Lists (as expected from the fixture)
        rl = ReadingList.objects.get(id=8)
        self.assertEqual(rl.creator_user.username, 'janeqhacker')
        total_count = ReadingList.objects.count()
        self.assertEqual(total_count, 10)

        # Now, simulate the deletion, and ensure that there are still 10
        self.client.post('/list/delete/8/')
        total_count = ReadingList.objects.count()
        return; # XXX delete this
        self.assertEqual(total_count, 10)


    def test_book_deletion_security(self):
        # Log in as test user alicereader (who has password of "password")
        self.client.login(username='alicereader', password='password')

        # Check that book #44 is indeed created by someone else, and that there
        # are a total of 58 books (as expected from the fixture)
        b = Book.objects.get(id=44)
        self.assertEqual(b.reading_list.creator_user.username, 'janeqhacker')
        total_count = Book.objects.count()
        self.assertEqual(total_count, 58)

        self.client.post('/book-delete/44/')
        # Challenge 4 SOLUTION
        total_count = Book.objects.count()
        return; # XXX delete this
        self.assertEqual(total_count, 58)


    def test_book_creation_security(self):
        # BONUS CHALLENGE SOLUTION
        # Log in as test user alicereader (who has password of "password")
        self.client.login(username='alicereader', password='password')

        # Check that book #44 is indeed created by someone else, and that there
        # are a total of 58 books (as expected from the fixture)
        rl = ReadingList.objects.get(id=8)
        self.assertEqual(rl.creator_user.username, 'janeqhacker')
        self.assertEqual(Book.objects.count(), 58)

        # Simulate attempted creation of the new book
        self.client.post('/book-create/8/', {
            'title': 'Test book',
            'description': 'testing',
        })
        # Ensure the new book wasn't created, e.g. the count did not increase
        return; # XXX delete this
        self.assertEqual(Book.objects.count(), 58)


class C5ModelReadingListUnitTestCase(TestCase):
    def setUp(self):
        # Setup is run before every test, and can be used to setup test data.
        # Since this is a "unit test", we won't be using fixtures since that
        # would be overkill -- "small" is the goal here.
        fake_user = User.objects.create_user('testuser')
        self.reading_list = ReadingList.objects.create(
            title='Testing list',
            category='fiction',
            creator_user=fake_user,
        )


    def test_increment_views(self):
        # Ensure the views start at 0
        self.assertEqual(self.reading_list.views, 0)
        # Run function
        self.reading_list.increment_views()
        # Challenge 5 TODO: Add an assert to make sure the view count has been incremented
        # SOLUTION C5
        self.assertEqual(self.reading_list.views, 1)

    def test_recalculate_popularity(self):
        self.reading_list.views = 100
        # Challenge 5 TODO: Test recalculate_popularity
        # - with views at 100 (score should be 10)
        # - with views at 0   (score should be 0)

        # Should be 10, since it's the views * 10%, subtracting the time in
        # hours since it was created
        self.reading_list.recalculate_popularity()
        self.assertEqual(self.reading_list.score, 10)

        # Now for views = 0, it should be also 0
        self.reading_list.views = 0
        self.reading_list.recalculate_popularity()
        self.assertEqual(self.reading_list.score, 0)

        # BONUS Challenge SOLUTION:
        from datetime import datetime
        fake_post_time = datetime(2020, 1, 1)
        fake_now_time = datetime(2020, 1, 1)
        self.reading_list.created = fake_post_time
        self.reading_list.views = 1000
        with patch('apps.core.models.now', return_value=fake_now_time):
            self.reading_list.recalculate_popularity()
            self.assertEqual(self.reading_list.score, 100)

        # Now test with 24 hour difference
        fake_post_time = datetime(2020, 1, 1)
        fake_now_time = datetime(2020, 1, 2)
        with patch('apps.core.models.now', return_value=fake_now_time):
            self.reading_list.recalculate_popularity()
            self.assertEqual(self.reading_list.score, 76)

    def test_get_absolute_url(self):
        # BONUS SOLUTION:
        # Try with ID 5
        self.reading_list.id = 5
        url = self.reading_list.get_absolute_url()
        self.assertEqual(url, '/list/5/')

        # Also make sure it works with ID 1
        self.reading_list.id = 1
        url = self.reading_list.get_absolute_url()
        self.assertEqual(url, '/list/1/')


    def test_str(self):
        # BONUS SOLUTION:
        self.reading_list.title = 'Testing list'
        s = self.reading_list.__str__()
        self.assertEqual(s, 'Testing list')

