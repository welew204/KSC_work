Feel free to complete any of these bonus challenges in any order.


Tip: Test Watch
-------------------

Sick of having to re-run tests? Here's how to make them auto-rerun.  Here's a
Bash/zsh snippet to cause tests to automatically re-run whenever you change a
Python file:

        find . -name '*.py' | entr python manage.py test

You'll likely need to install `entr` to get it to work:

- macOS: `brew install entr`
- Ubuntu: `sudo apt install entr`





Bonus Challenge: Test coverage
-----------------------------------------------

- Background: "Test coverage" is what percentage of the lines of code are run
  when your entire suite of automated tests run. Well-run professional software
  projects aim for 80%-90% (not 100%) test coverage as a goal.

Bonus Challenge: Django doesn't come with a test coverage tool built-in, but
it's quick to install a popular test coverage tool called "Coverage.py":

        pipenv install coverage

Then, to see the test coverage of the "core" app, run the following:

        coverage run --source='./apps/core' manage.py test
        coverage report

Coverage.py includes a static site generator which highlights in red the lines
of code that aren't covered. To see this, run the following command, before
opening up "htmlcov/index.html" (the generated output) in your web browser:

        coverage html

Comprehension questions from reading the HTML report:

1. Which view-function(s) are completely tested?
2. Which view-function(s) are completely untested?
3. Which view-function(s) are only partially tested?
4. Could there still be bugs if you have 100% test coverage? Why or why not?
5. Could there be ways that test coverage could technically increase, but that
could be bad? How?

(Answers at the bottom of the file)



Bonus Challenge: Mocking
-----------------------------------------------

- Background: "Mocking" is a technique in testing when certain classes or
  functions are "faked" in order to test other code. Examples:
  - Faking API requests to avoid using up your API limit during tests.
  - Faking the time or date test code that relies on the current time.
  - Faking classes or functions that have not yet been written, but are well
    defined what they should do.

- Python comes "batteries-included" with a mocking system:
    - <https://docs.python.org/3/library/unittest.mock.html>


- Challenge: Write unit tests using mocking for this application to more
  thoroughly test the `recalculate_popularity` method, by mocking the
  `from django.utils.timezone import now` function. Here's code that will get
  you started:


        from datetime import datetime
        from unittest.mock import patch
        fake_post_time = datetime(2020, 1, 1)
        fake_now_time = datetime(2020, 1, 2)
        self.reading_list.created = fake_post_time
        self.reading_list.views = 0
        with patch('apps.core.models.now', return_value=fake_now_time):
            self.reading_list.recalculate_popularity()
            print('this is new score:', self.reading_list.score)

- Hint: This can go in addition to or instead of your existing unit tests



Bonus Challenge: End-to-End testing with Selenium
-------------------------------------------------

Background:  A type of testing that we do not cover in this course (beyond this
one challenge) is "End to End" testing. This type of testing automates an
actual web web browser (not just the "dummy" web browser of Django's
self.client). It tests the behavior of your full-stack, including the behavior
of JavaScript, CSS, etc.

- One popular technology for E2E testing is Selenium
- We don't cover Selenium more in this course because:
    - It requires a few possibly tricky things to install
    - Once set-up, it's slow: It can literally take seconds or even minutes to
      run each test, since it's bringing up a real browser and automating
      "clicking" on things.
    - Chances are, you can safely skip it for your "pure-Django" projects and
      still have quality testing. This is because the functionality of your
      project mostly just depends on sending the right responses back, for
      which the "dummy client" that Django provides works wonderfully.
    - Selenium in particular makes heavy use of "XPath", a slightly antiquated
      way to dig through HTML (DOM) elements on a page, which can take a bit to
      learn.
- However, for JavaScript-heavy projects, this style of testing can be quite
  important.

Bonus Challenge: Get a Selenium-based E2E test working on Django

1. Start with read Django's documentation:
    - <https://docs.djangoproject.com/en/3.0/topics/testing/tools/#django.test.LiveServerTestCase>
2. Also read Selenium's documentation about "geckodriver" (Firefox):
    - <https://pypi.org/project/selenium/#drivers>
3. Install selenium:
    - `pip install selenium`
4. Install geckodriver to automate Firefox:
    - For macOS, install with `brew`:
        - `brew install geckodriver`
    - For Ubuntu, install with `apt`:
        - `sudo apt install firefox-geckodriver`
5. Copy the TestCase below into tests.py, then re-run your tests.

A functioning test is written for The Book Club app as follows:

        from django.contrib.staticfiles.testing import StaticLiveServerTestCase
        from selenium.webdriver.firefox.webdriver import WebDriver

        class SeleniumTestCase(StaticLiveServerTestCase):
            fixtures = [
                'testing_data.json',
            ]

            @classmethod
            def setUpClass(cls):
                super().setUpClass()
                cls.selenium = WebDriver()
                cls.selenium.implicitly_wait(10)

            @classmethod
            def tearDownClass(cls):
                cls.selenium.quit()
                super().tearDownClass()

            def test_login(self):
                url = self.live_server_url + '/account/login/'
                self.selenium.get(url)
                username_input = self.selenium.find_element_by_name("username")
                username_input.send_keys('janeqhacker')
                password_input = self.selenium.find_element_by_name("password")
                password_input.send_keys('password')
                self.selenium.find_element_by_xpath('//button[@type="submit"]').click()
                # Now, in the next page, try looking for the link to my profile
                # page, and ensure it links to the user account
                elem = self.selenium.find_element_by_partial_link_text('janeqhacker')
                href = elem.get_attribute('href')
                url = self.live_server_url + '/account/users/janeqhacker/'
                self.assertEqual(href, url)








ANSWERS: Test coverage comprehension
------------------------------------------------------

1. Fully tested (by the end of this activity):
    - `reading_list_home`
    - `reading_list_delete`
    - `reading_list_delete_book`
2. Fully untested:
    - `reading_list_create`
    - `reading_list_details`
3. Partially untested:
    - `reading_list_create_book`
4. Yes, definitely.
    - Not only could the test be faulty or incomplete, there are still many
      ways a line of code could be wrong but still seem correct according to
      tests. Notably, it can't take into account all the different values that
      the variables could have.
    - Does this view-function work with logged out users? Logged in users?
      With data in the database? Without data? etc)
5. Yes.
    - Adding more lines of code that don't do much (e.g. print statements) in
      tested areas will increase your percentage test coverage, but does not
      actually indicate an increase of code quality.
    - An easy way to increase test-coverage to 100% is delete your entire code
      base -- there won't be any untested lines if there are no lines! ("Guy
      tapping head meme" could go here)

