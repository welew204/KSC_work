Challenge 1:
-------------------

Get the code running. You should see a site that might coincidentally resemble
a popular social network when it is fully working. Run:

        pipenv --python 3
        pipenv shell
        pipenv install django

Then finally:

        python manage.py migrate
        python manage.py runserver

- Click around a little, until you understand the app.
- To "login", just sign up as a new user from the homepage. (The login form is
  not complete.)



Challenge 2:
-------------------

- You will be building the wall-posting mechanic of this application, so that
  you can create posts on user's walls, and each user has a separate wall. Your
  goal now is to implement the "C" aspect of CRUD. Look at the views.py for
  further clues.

- Hints are in views.py

- Since "R" is not yet finished for reading & displaying wall posts, the only
  way you will know you are doing the "C" (creating) part correctly is by
  either using the Django admin panel, or the DB Viewer



Challenge 3:
-------------------

- Implement the "R" aspect of CRUD.

- Hints are in views.py


Challenge 4:
-------------------

- Implement the "D" aspect of CRUD.

- Hints are in views.py


Challenge 5:
-------------------

- Implement the "U" aspect of CRUD.

- Hints are in views.py



Advanced Bonus Challenge
----------------------------

Finished everything here, and still have time? The "Bonus" for this activity is
to simply go ahead and start working on the next activity.
