SCENARIO: Now that you fixed all these regressions, you're tasked with
adding automated regression testing so that this never happens again.


Challenge 1: Discussion
-----------------

Get the code running. As before, it often requires three steps:

    pipenv --python 3
    pipenv shell
    pipenv install django

Then finally:

    python manage.py migrate
    python manage.py runserver

Once you have the site running, ensure you can run the tests. Use a new
terminal or terminal tab to run:

    python manage.py test

Find the file that contains the automated tests. Discuss with the
student(s) near you the answer to the following questions:

* In your own words: Describe 1) what is automated testing, and 2) why
  it is a very good thing.

* In your own words: What do you think think each of the 3 tests is
  testing for? What bugs (or regressions) might be introduced that could
  cause a test to fail?  Can you explain what each line of code is
  doing?

* In your own words: What additional aspects could be checked for?


Challenge 2:
-----------------

Time to generate your own test. Your goal is to write a test to make
sure the link to All Tweets at the top of the page is never accidentally
removed or broken.

1. Examine `test_shows_homepage_text`

2. Now, examine `test_homepage_shows_all_tweets_link`. See how it is empty,
save for a few clues? Your goal is to "fill it in" with something that
simulates getting a response and checking the contents of the response

Hint: This will only take only a couple lines of code, and very closely
resemble the previous test.

Bonus: Also check for the page URL (something like "all-tweets"
-- check the source!) to ensure the link is correctly rendered to the
correct page.

Challenge 3:
-----------------

Now, write a test to make sure that the all-tweets page shows a single
tweet. Most of the code is set up for you in the test
`test_all_tweets_page_shows_a_tweet`, you will just need to add the
"assert" checks.

Hint #1: Use your browser to see the HTML source code that is being
generated when you visit the all tweets page. Then, make sure
the source code.

Hint #2: A well-written test would also check that the user making the
tweet's username appears next to the tweet.

Hint #3: You can do all this by only adding 2 lines of code.

Challenge 4:
-----------------

Now, write another test that ensures that this tweet also appears on the
user's page. It will be similar to the test you wrote for Challenge 3,
except be fetching a different page.

Hint #1: Create a new function definition that starts with `test_`, and
starts the same as the `test_all_tweets_page_shows_a_tweet`. It will have
to create the test tweet and test user just as before (tedious!)


Challenge 5:
-----------------

Your tests aren't very DRY, are they? There is repeated code. Refactor
by moving the repeated Model code to a method called "setUp". The
"setUp" method lets us write DRYer code, as it will be repeated for each
test case.

Hint: See the Django documentation on this if you get stuck:
https://docs.djangoproject.com/en/2.0/topics/testing/overview/



Challenge 6:
-----------------

Now to test that the tweeting form works. Write a new TestCase that will
check that POST requests to a tweet user page succeed.

HINT: This is a much more involved test case! You will have to simulate
logging in first. There are a couple approaches to simulating logging
in. One would be to simulate the login POST request like in the first
test case. A simpler way would be to use built-in Django test features.
See this stack overflow post:
https://stackoverflow.com/questions/2619102/


Bonus Challenges:
-----------------

1. Write the TestCase for the "Updating a tweet" feature.

2. Write the TestCase for the "Liking a tweet" feature.


