This activity is different: Instead of using SQL directly, or developing a
Python project, we'll be getting practice with the ORM related tools that come
with Django, showing more advanced usage of the ORM and how it relates to SQL.

- NOTE: This activity *DOES NOT* use Postgres, but instead the Django and
  SQLite. However, the objective is to show how the various SQL commands we
  just learned "translate" when using the Django ORM, and applies also to when
  Django uses Postgres or any other DB.

- NOTE: None of the challenges have coding solutions: They are intended to
  guide you in exploring how the Django generates SQL.

- We'll use again the "The Book Club" project.



Challenge 1: Django shell
--------------------------------------

- Background: Django provides an "shell mode".  Python's "interactive mode"
  (aka REPL) permits you to test Python code as soon as you hit enter.  This
  Django-enhanced version also sets up DB connections, etc., based on your
  project settings, which makes it ideal to practice Django ORM code.


1. Installation: Time to get this code running! As this is based on the Project
Starter, generally, it requires three steps:

        pipenv --python 3
        pipenv shell
        pipenv install --skip-lock --dev      # might cause ignorable error
        python manage.py migrate  # optional, only if it complains


2. Instead of doing a "runserver" for this activity, we'll be practicing Django's
interactive Python shell. Start it with (while within a virtualenv):

        python manage.py shell

3. Test it out by typing some testing Python code. For example:


        $ python manage.py shell
        Python 3.6.9
        [GCC 8.4.0] on linux
        Type "help", "copyright", "credits" or "license" for more information.
        (InteractiveConsole)
        >>> 2 + 2
        4
        >>> print('Hello Django World!')
        Hello Django World!



- Note: Use "Ctrl+D" when you want to exit





Challenge 2: QuerySet practice
--------------------------------------

- Background: Reading data from Django's ORM is based on a Django-specific term
  "QuerySet". A QuerySet is the type of object that is returned from the
  database when you do a .filter or an .all. It's an iterable, so it behaves a
  lot like a list. It's "lazy", which  means it will only actually execute the
  SQL query and get the data when it's "evaluated", or looped through.

- Corresponding SQL: `SELECT ... FROM`, `OFFSET`, `LIMIT`

- Docs: <https://docs.djangoproject.com/en/3.1/ref/models/querysets/>

1. Test & discuss the following ORM code in the Django shell. Feel free to copy
and paste each line. Your goal is understanding what each line is doing.


```python

from apps.core.models import ReadingList, Book

all_books = Book.objects.all()
print(all_books)
print(all_books.query)

reverse_alphabetical = all_books.order_by('-title')
print(reverse_alphabetical)
print(reverse_alphabetical.query)

five_books = reverse_alphabetical[5:10]
print(five_books)
print(five_books.query)

```

2. Observe how with each new version of the QuerySet, the underlying SQL gets
increasingly complex.

3. You don't need to do it one step at a time. Typically, in Django you put it
altogether, as such:


```python

qs = Book.objects.all().order_by('-title')[5:10]
print(qs)
print(qs.query)

```




Challenge 3: QuerySet WHERE practice
--------------------------------------

- Corresponding SQL: `WHERE` clauses, `IN` and other operators

Now it's time to practice "filter" what we returning, using the Django
equivalent of `WHERE` ("filter" and it's opposite, "exclude").

Run each of these code examples, and see if you can decipher how the Django ORM
query generates the corresponding SQL in each example:


```python

from apps.core.models import ReadingList, Book

qs = ReadingList.objects.filter(views__gt=100)
print(qs)
print(qs.query)

qs = ReadingList.objects.exclude(category='fiction')
print(qs)
print(qs.query)

qs = ReadingList.objects.filter(title='Dystopian YA')
print(qs)
print(qs.query)

titles = ['Great American Novels', 'Dystopian YA']
qs = ReadingList.objects.filter(title__in=titles)
print(qs)
print(qs.query)

qs = ReadingList.objects.filter(title__icontains='science')
print(qs)
print(qs.query)

```




Challenge 4: QuerySet conjunctions
--------------------------------------

- Bakground: By using multiple filters and/or excludes, you can execute complex
  queries. Also, separate QuerySets can be combined into a single queryset
  using | and & operators in Python. The resulting SQL uses `OR` and `AND` to
  generate more complicated `WHERE` clauses.

- Corresponding SQL: `OR` and `AND`

Run each of these code examples, and see if you can decipher how the Django ORM
query generates the corresponding SQL in each example:


```python

from apps.core.models import ReadingList, Book

qs = ReadingList.objects.filter(category='nonfiction').exclude(views__gt=5)
print(qs)
print(qs.query)

childrens_books = ReadingList.objects.filter(category='children')
pop_fiction = ReadingList.objects.filter(category='fiction').filter(views__gt=5)
either_pop_fiction_or_childrens = pop_fiction | childrens_books
print(either_pop_fiction_or_childrens)
print(either_pop_fiction_or_childrens.query)

popular_books = ReadingList.objects.filter(views__gt=5)
nonfiction = ReadingList.objects.filter(category='fiction')
both_popular_and_nonfiction = popular_books & nonfiction
print(both_popular_and_nonfiction)
print(both_popular_and_nonfiction.query)

```



Challenge 5: QuerySet aggregations
--------------------------------------

- Bakground: Django supports aggregation functions, such as Max, Min, or Sum.
- Corresponding SQL: `Count`, `Sum`, `Max`, `Min`, `Avg`, `StdDev` and more
- NOTE: The result of .aggregate is a dictionary, not a QuerySet

Run each of these code examples, and see if you can decipher how the Django ORM
query generates the corresponding SQL in each example:

```python

from apps.core.models import ReadingList, Book

from django.db.models import Sum, Max, Min, Avg

data = ReadingList.objects.all().aggregate(Sum('views'), Max('views'), Min('views'), Avg('views'))
print(data)
print(data['views__sum'])

data = ReadingList.objects.filter(category='fiction').aggregate(Sum('views'), Max('views'), Min('views'), Avg('views'))
print(data)
print(data['views__sum'])
```





Challenge 6: QuerySet values
--------------------------------------

- Bakground: Django allows fetching data as simple lists and dictionaries (as
  opposed to the QuerySet). One use of this feature is speed: When you are
  optimizing a popular site, select only fields you need to avoid overhead. The
  other use is combining with "annotate" to perform a GROUP BY query.
- Corresponding SQL: `AS`, `GROUP BY`, `Sum`, `Count`

Run each of these code examples, and see if you can decipher how the Django ORM
query generates the corresponding SQL in each example:

```python

from apps.core.models import ReadingList, Book

from django.db.models import Sum, Count

data = ReadingList.objects.all().values('id', 'title')
print(data)

data = ReadingList.objects.all().values_list('title', flat=True)
print(data)

data = ReadingList.objects.all().values('category').annotate(total_views=Sum('views'), number=Count('id'))
print(data)
print(data.query)

```




# Bonus Challenges

- Want more Django ORM examples? Check out the `bonus_instructions.md`
