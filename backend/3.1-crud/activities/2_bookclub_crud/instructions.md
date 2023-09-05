Challenge 1:
-------------------

Get this code running. As this is based on the Project Starter, generally, it
requires three steps:

        pipenv --python 3
        pipenv shell
        pipenv install --skip-lock --dev      # might cause ignorable error

Then finally:

        python manage.py migrate
        python manage.py runserver

- Once running, try creating a book (C in CRUD), browsing / reading the books
  (R in CRUD), updating a book (U in CRUD), and deleting a book (D in CRUD)


Challenge 2: Find each CRUD
---------------------------

1. Already functional are all 4 CRUD operations for Books in the database.
Find each of the 4 CRUD view-functions in `apps/core/views.py` (Hint: there are
comments left as clues!)

2. In your words, can you explain the code that powers each of the 4 CRUD
operations in this concrete example?

3. In the remaining challenges you will take copy this code and re-apply it to
fill in each of the 4 CRUD operations for a different model: ReadingList.
    - To save you time, the HTML / templating and urls.py are finished for you,
      such that all that's left is the contents of the view-functions.



Challenge 3: R in CRUD
-------------------------------------

Start with the R in CRUD. This will require changes to the home view-function
to display the existing Reading Lists in the database.

General pattern:

        results = NameOfModelGoesHere.objects.all()
        context = {
            'name_of_context_variable_goes_here': results,
        }


- Hint: Examine the template file to know the name of the context variable
- Note: A few ReadingLists were created for you, so you'll know as soon as this
  is working. (Otherwise, you'd have had to create some in the Django admin.)



Challenge 4: C in CRUD
-------------------

- Implement the "C" aspect of CRUD, to allow creation of new ReadingLists



Challenge 5: D in CRUD
-------------------

- Implement the "D" aspect of CRUD, to allow deletion of existing ReadingLists



Challenge 6: U in CRUD
-------------------

- Implement the "U" aspect of CRUD, to allow editing of existing ReadingLists


Bonus Challenges
-------------------

Get more practice with all 4 CRUD operations, and further complete this web
application. Check out the `bonus_instructions.md` file to get going.

