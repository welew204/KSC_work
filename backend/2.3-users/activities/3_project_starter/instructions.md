In this activity, you will use the Kickstart Coding Django Project Starter to
create (from scratch) an application that tracks book to read in a bookclub.

To speed things up, you are provided with HTML and Python code snippets,
"puzzle pieces" that can be assembled with little-to-no modification to create
the finished product: `code_hints.html` and `python_code_hints.py`

Challenge 1
------------------

For Challenge 1, let's get going with a brand new Django project. The full
Project Starter guide is linked below, but the relevant steps have been copied
here into Challenge 1, so you don't need to read the full guide.

<https://github.com/kickstartcoding/django-kcproject-starter>


Note: You might get errors with the next few commands. See troubleshooting.md

1. Start a new project called "bookclub" using this template as follows:

        django-admin startproject --template=https://github.com/kickstartcoding/django-kcproject-starter/archive/master.zip bookclub

2. CD into your new project, and get going with `pipenv`:

        cd bookclub
        pipenv --python 3
        pipenv shell

3. Install the dependencies listed in Pipfile (note: may cause ignorable error):

        pipenv install --skip-lock --dev

4. Make migrations:

        python manage.py makemigrations accounts

5. Run the migrations to create the SQLite database:

        python manage.py migrate

6. Get the server running:

        python manage.py runserver


7. Click around, explore the project
    - The sign-up and sign-in pages should work, and there are some placeholder
      HTML and view-functions
    - The toolbar on the right is the "Django Debug Toolbar", which as the name
      implies is only for debugging and will not exist when you push to heroku.
      Use it to inspect the HTML templates, context, view functions, and
      static files in use in every page, along with other useful information!




Challenge 2
-----------

Now it's time to assemble the homepage HTML.

1. Locate the "home.html" file in your newly created project (Hint: Use the
Django Debug Toolbar to identify where it is, if you can't find it)

2. Replace the existing content for the big headline section at the top of the
page with the Challenge 2 HTML code hint.

3. If successful, you'll see "Book list", and a broken "Add book" button


Note: The form will not be functioning at this point, you will only complete
the functionality of the form in Challenge 5.


Challenge 3
-----------

Now, let's create a brand new model to save information on our books.

1. Start by making necessary code changes:
    - In the models.py file for the "core" app, create a model called "Book"
      with two fields: "title" (a CharField), and "description" (a TextField).
    - In the admin.py file for the "core" app, register the Book
    - Spend a little time first to see if you can figure out the syntax on your
      own. Then, double check your answer by looking at the Python code hint
      for this challenge.

2. Create a new migration for your model changes ("makemigrations"), then apply
it ("migrate") to update the database:

        python manage.py makemigrations core
        python manage.py migrate

3. Confirm your model is functional by using the Django admin interface:
    - Use `python manage.py createsuperuser` to create a new admin account
    - Create a couple books in the interface: http://localhost:8000/admin/



Challenge 4
-----------

1. Time to show the books on the homepage! Add code to the "home" view that
gets all books from the database and includes them in the context.

2. Stuck? See the code snippet hint in `python_code_hints.py`

3. If completed correctly, the books create with the admin interface should
are displayed in the "Book list"



Challenge 5
-----------

Now that our books are visible on the homepage, it's time to allow anyone to
add new books to our book list (not just administrators).

1. Define a new Django Form class, and add relevant form handling code to the
home view. Find the needed code in `python_code_hints.py`

2. If completed correctly, you will have a fully-functioning form with title
and description fields on the homepage that you can use to add books.


Challenge 6
-----------

Let's get practice adding a new field to a Django model.

1. Start by making necessary code changes:

        cover_url = models.URLField(max_length=200, blank=True)

2. Create a new migration for your model changes ("makemigrations"), then apply
it ("migrate") to update the database:

        python manage.py makemigrations core
        python manage.py migrate

3. Confirm your new field is functional in the Django admin interface

Note: No need to add a new field to the form just yet. In the bonus challenge
below, it uses this field for an API.


Bonus Challenges
----------------

All of these can be done in any order, and have code snippet hints that can be
used more-or-less verbatim -- you just need to figure out where the code goes!

1. Bootstrap Forms
    - Kickstart Coding Django Project Starter comes with django-bootstrap5
      pre-installed. Let's use that make our Add Book form look nicer by using
      Bootstrap-styled forms.
      # DONE

2.  Multiline descriptions
    - Try creating a book with a description that has line-breaks, e.g. spans
      multiple paragraphs or lines. Notice how it still gets rendered to as a
      single line, due to how HTML ignores linebreaks.
    - Use built-in Django filters to format the description as it was entered.

3. Delete button
    - We haven't covered deletion "officially" just yet, but get a head start
      by adding a HTML form to every book on the homepage, with a hidden input
      containing the ID for the target book. The idea of this form is by
      clicking the button, it will submit the hidden input, telling the Python
      code which book needs to be deleted.
    - In addition to adding HTML, you'll also have to add a new view-function
      to the views.py, and reference it in urls.py
    - Note: No need to use Django forms for this one.

4. API covers
    - It would be cool to have book covers be automatically populated.
    - Use the Open Library API to save a URL to the book cover.
    - Hint: You'll need to install requests, as it's not pre-installed

