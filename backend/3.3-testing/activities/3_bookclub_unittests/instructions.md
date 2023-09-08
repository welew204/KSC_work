In this activity we will be practicing different "Test Driven Development"
techniques using "The Book Club" project.

Challenge 1:
-------------------

- Get this code running. As this is based on the Project Starter, generally, it
  requires three steps:

        pipenv --python 3
        pipenv shell
        pipenv install --skip-lock --dev      # might cause ignorable error

- Then finally:

        python manage.py migrate
        python manage.py runserver

- Once running, click around. Although devoid of data, the app is complete.

- There are already several tests written. Examine "EmptySiteTestCase" in
  tests.py and see if you can understand what is being tested.



Challenge 2: Fixtures
------------------------------

- Background: Django has a handy feature called "fixtures" to save databases in
  a JSON format, to be restored again at a later date. Conventionally, the file
  is placed in a "fixtures/" directory of an app. Relevant commands:
    - `python manage.py dumpdata -o name_of_file.json`
    - `python manage.py loaddata name_of_file.json`

- Challenge: There is already a "fixture" file created. Can you find it? Load
  this test data, and then test that you can see it in your browser:

        python manage.py loaddata testing_data.json




Challenge 3: Functional testing with fixtures
-----------------------------------------------

- Background: Django fixtures can be used as fake data during testing, which is
  especially useful during "functional testing". Functional testing tests a web
  app from the perspective of a user, ensuring that the software functions as
  intended. Previous testing activities have all been this type of testing.

- Challenge:
    - Complete the C3FunctionalFixtureTestCase on to ensure that the fixture
      test data is correctly displayed on several pages.
    - 2 tests are written for you, follow the same pattern two write tests for
      the other pages of test data

- Hint:
    - Clicking on a Reading List can cause that Reading List to become more (or
      less) popular, due to a "trending algorithm" (see Challenge 5)
    - This causes the order / pages to change if you click around. To restore
      the data to how the tests see it, use `loaddata` again.


Challenge 4: Test-first development
-----------------------------------------------

- Background: Test First Development (TFD) is when a developer first writes an
  automated test for a feature or defect, and only after works on the actual
  code. In certain cases this technique can be a faster way to develop!

- Challenge: The app has a few security defects intentionally included:

    1. Examine the `test_list_deletion_security` code and uncomment the last
    line. Run your tests and ensure they fail. This test failure is expected:
    The code intentionally has a defect, as it doesn't check who owns Reading
    Lists before deleting them.
    2. Fix the issue by uncommenting the relevant code (Hint:
    `apps/core/views.py` lines 70-71)
    3. Ensure the test works now. Congrats, you've done "TFD"!
    4. Now, rinse & repeat for `test_book_deletion_security`: 1) Finish the
    last lines of the test; 2) confirm the test fails; 3) fix views.py; 4)
    confirm the test succeeds.

- Bonus Challenge: To get extra practice with Test Fist Development, another
  defect has been left in to try TFD on: Users can create Books in Reading
  Lists that they don't own, if they simply guess the URL.




Challenge 5: Unit testing
-----------------------------------------------

- Background: Unit Testing is the practice of testing a single portion of code
  (such as a class or function) in isolation. Good unit tests make it easier to
  track down bugs since they should narrowly point toward the misbehaving code.

- Challenge: A common "unit test" practice is to write tests for every function
  (method) defined on a class in isolation. In this challenge we'll write tests
  for the `increment_views` function, and the `recalculate_popularity`
  function. Both of these functions work as intended, but lack unit tests.

    1. Examine the code that is already there for testing the `increment_views`
    function. Finish it with a single "assert" line to ensure the views have
    been incremented to 1.

    2. The `recalculate_popularity` function calculates the "score" of a
    Reading List based on how long ago it was posted & its view count, to
    determine how "trending" it is. Finish writing the tests for this function:
        - With views at 100 (the Reading List score property should be 10)
        - And with views at 0 (the Reading List score property should also be 0)

- Bonus Challenges: Write unit tests for the `get_absolute_url` and `__str__`
  methods also, for complete test coverage on the Reading List model.


Bonus Challenges
----------------

More bonus challenges are in a separate Markdown instructions file.

