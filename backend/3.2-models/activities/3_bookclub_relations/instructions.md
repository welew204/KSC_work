Challenge 1: Set-up
-------------------

Get this code running. Refer to the steps from previous activities if you get
stuck. Generally, it requires three steps:

        pipenv --python 3
        pipenv shell
        pipenv install --skip-lock --dev          # ignore errors here

Then finally:

        python manage.py runserver

- Explore the functionality of the application in your browser:
    - Some stuff works: You can create or log into an account, and then vote up
      or down on reading lists.
    - Note that some features are broken: Clicking on a reading list shows ALL
      books in the database, not just the ones in that list, and you receive
      errors if you try creating anything new.




Challenge 2: Code comprehension
--------------------------------

So many lines of code! This application is getting more and more sophisticated,
and has reached 100s of lines of code. For these challenges, however, only the
parts marked with TODO are relevant to this activity.

- Can you find all the TODOs in `apps/core/views.py` and `apps/core/models.py`?
  These all have to do with Model Relations.  You'll be solving these one at at
  time in the following challenges.

- In your own words, can you explain how the last few views work:
    - `def delete_book`
    >> finds book on key:book_id, delete() this object, redirects back
    - `def reading_list_vote_up`
    >> finds list by list_id, accesses the .votes attrib, incremenets, saves, redirects
    - `def reading_list_vote_down`
    >> same, but w/ decremeent instead


Challenge 3: Enabling ForeignKey relations
-------------------------------------------

- Go into `apps/core/models.py`

- The finished application will have two "One to Many" (Foreign Key) relations:
    1. Users to ReadingLists    (one User may have created many ReadingLists)
    2. ReadingLists to Books    (one ReadingList may have many Books)

- Uncomment the two ForeignKey relations.
- If done correctly, when you refresh, it will show the users and avatars who
  created each Reading List


Note: Normally, you would have to do makemigrations + migrate after you make a
change to a model, but for the sake of this learning activity, this was already
done for you. (The database is ready with example data, and all that's left is
to enable it in models.py)



Challenge 4: Filter books (R in CRUD)
--------------------------------------

Currently, when you click on a book, it shows ALL books, not just the ones on
the ReadingList. Make necessary modifications to "filter" by only the books
associated with the ReadingList.

Hints:

- One lines of code total in `apps/core/views.py` - `def reading_list_details`
- Code hint:

        books = Book.objects.filter(
            NAME_OF_FOREIGNKEY_FIELD=VARIABLE_HOLDING_READING_LIST_GOES_HERE,
        )
        # HINT: Replace ALL_CAPS with something else



Challenge 5: Saving an association (C in CRUD)
-----------------------------------------------

(Two lines of code total in `apps/core/views.py`)

1. Create an account with the "Sign up" page.

2. Currently, you can't create a new ReadingList, since it isn't (yet) relating
the ReadingList with the User.
    - Make necessary modifications in the code that creates the book to relate
      the book with the ReadingList, so you can create new lists.
    - Hint (replace ALL CAPS with something else):

        NAME_OF_FOREIGNKEY_FIELD=VARIABLE_HOLDING_USER_GOES_HERE,


3. Currently, adding books is also broken
    - Make necessary modifications in the code that creates the book to relate
      the book with the ReadingList, so you can add books to the list.
    - Hint:

        NAME_OF_FOREIGNKEY_FIELD=VARIABLE_HOLDING_READING_LIST_GOES_HERE,



Challenge 6: Show lists on user page (R in CRUD)
-------------------------------------------------

Currently, when you click on a user name, it takes you to a user profile page
that's mostly blank. We want to make the necessary changes to list the
ReadingLists the user has made on their profile page.

Hints:

- You'll need to make changes to `apps/accounts/views.py` - `def view_profile`.
- The HTML + templating is already written for you and commented out, you will
  need to find it, and enable it.
- Use a similar pattern for showing books in a ReadingList, except with the
  names of the variables and models changed.
- Remember to include it in the context dictionary!


Bonus Challenges
----------------

See separate file.
