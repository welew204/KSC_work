Feel free to explore any of these bonus challenges in any order.

None of the bonus challenges have solutions: They are intended to guide you in
exploring commands and concepts to explore to better understand how the Django
ORM interacts with SQL.



Bonus Challenge: More Django ORM
-----------------------------------------------

- Background: The Django ORM is capable of generating most typical SQL queries.

Run each of these code examples, and see if you can decipher how the Django ORM
query generates the corresponding SQL in each example:


```python

from apps.core.models import ReadingList, Book

# Generating more complex "subqueries" across ForeignKey relations:
qs_rl = ReadingList.objects.filter(category='fiction', views__gt=5)
qs = Book.objects.filter(reading_list__in=qs_rl)
print(qs)
print(qs.query)

# Another similar way to filter based on ForeignKey relations:
# NOTE: We'll get to "INNER JOIN" in a later lesson
qs = Book.objects.filter(reading_list__category='fiction')
print(qs)
print(qs.query)


# This can be "chained" together to reach into many tables
qs = Book.objects.filter(reading_list__creator_user__username__icontains='jane')
print(qs)
print(qs.query)


# Recall that a QuerySet is only executed when it's evaulated. That means you
# can use them as temporary variables as you build up larger and larger
# queries, as such:
qs = Book.objects.filter(reading_list__category='fiction')
qs = qs | Book.objects.filter(reading_list__category='children')
qs = qs & Book.objects.filter(reading_list__title__icontains='science')
# (at this point, no SQL was actually genearated or evaluated)

# Only evaluated now, since its converted to a list:
book_list = list(qs)
print(book_list)

# But, if we do something, we'll need to "reevalate"
qs = qs & Book.objects.filter(reading_list__views__gte=5)
book_list = list(qs)
print(book_list)
```


Bonus Challenge: Django Debug Toolbar SQL
-----------------------------------------------

- Background: Django Debug Toolbar is installed in this project. One of the
  most useful features of this is to see the SQL commands that are run on every
  page.

For this bonus challenge, start the web server for the Book Club project:

    python manage.py runserver

Then, try navigating to each page. Check out the "SQL" tab on the Django Debug
Toolbar (by default, on the right, as a button called DjDT). Answer the
following comprehension questions:

1. How long did the queries for this page take?
    - Hint: The SQL tab often says something like "2 queries in 1.09ms"
2. What was the slowest query for this page?
    - Hint: In the "waterfall timeline" graph of queries, it's typically "red"
3. What data was returned for each query?
    - Hint: click the "SEL" button


- HINT: If the Django Debug Toolbar doesn't show for you, try 127.0.0.1:8000
  instead of localhost:8000





Bonus Challenge: Other SQL management commands
-----------------------------------------------

- Background: Django's manage.py provides a collection of handy management
  commands that generate or interact with SQL.

Try the following commands — all in your shell (Bash or zsh), not Python — to see more SQL related
to your Model structure:


        # Display SQL commands to wipe out database entirely
        python manage.py sqlflush

        # Display SQL commands to generate models for the core app
        python manage.py sqlmigrate core 0001

        # Start a SQL prompt for the given database configured by settings.py
        # (in this case, since it's local, it will be for SQLite, NOT Postgres)
        python manage.py dbshell




