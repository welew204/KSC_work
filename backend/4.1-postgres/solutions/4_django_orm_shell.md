

# Challenge 2


Importing relevant models from core app:

    >>> from apps.core.models import ReadingList, Book

Querying ALL Book objects from the database. First prints out the QuerySet
containing the books, then prints out the SQL query getting executed:

    >>> all_books = Book.objects.all()
    >>> print(all_books)
    <QuerySet [<Book: The Lord of the Rings>, <Book: Harry Potter and the Prisoner of Azkaban>, <Book: A Game of Thrones>, <Book: The Way of Kings>, <Book: The Storm Before the Storm: The Beginning of the End of the Roman Republic>, <Book: Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City>, <Book: City of Quartz: Excavating the Future in Los Angeles>, <Book: The Empire of Necessity: Slavery, Freedom, and Deception in the New World>, <Book: The Age of Empire: 1875-1914>, <Book: Nineteen Eighty-Four>, <Book: Ender's Game>, <Book: Starship Troopers>, <Book: Snow Crash>, <Book: Slaughterhouse Five>, <Book: Dune>, <Book: The Left Hand of Darkness>, <Book: The Martian>, <Book: Foundation>, <Book: The Time Machine>, <Book: The War of the Worlds>, '...(remaining elements truncated)...']>
    >>> print(all_books.query)
    SELECT "core_book"."id", "core_book"."title", "core_book"."description", "core_book"."reading_list_id" FROM "core_book"



Now, build up a query, starting with a reversed "order by" on the title column
(sorting reverse alphabetical order by title):


    >>> reverse_alphabetical = all_books.order_by('-title')
    >>> print(reverse_alphabetical)
    <QuerySet [<Book: Wuthering Heights>, <Book: Winnie-thePooh>, <Book: Where the Wild Things Are>, <Book: War and Peace>, <Book: The Zimiamivia Trilogy>, <Book: The Worm Ouroboros>, <Book: The Way of Kings>, <Book: The War of the Worlds>, <Book: The Time Machine>, <Book: The Storm Before the Storm: The Beginning of the End of the Roman Republic>, <Book: The Maze Runner>, <Book: The Martian>, <Book: The Lord of the Rings>, <Book: The Little Prince>, <Book: The Left Hand of Darkness>, <Book: The Last Man>, <Book: The King of Elfland's Daughter>, <Book: The Island of Doctor Moreau>, <Book: The Hunger Games>, <Book: The Great Gatsby>, '...(remaining elements truncated)...']>
    >>> print(reverse_alphabetical.query)
    SELECT "core_book"."id", "core_book"."title", "core_book"."description", "core_book"."reading_list_id" FROM "core_book" ORDER BY "core_book"."title" DESC



Take the previous query, and modify it now to select books 5-10 (e.g. skip 5,
then select until the 10th book):

    >>> five_books = reverse_alphabetical[5:10]
    >>> print(five_books)
    <QuerySet [<Book: The Worm Ouroboros>, <Book: The Way of Kings>, <Book: The War of the Worlds>, <Book: The Time Machine>, <Book: The Storm Before the Storm: The Beginning of the End of the Roman Republic>]>
    >>> print(five_books.query)
    SELECT "core_book"."id", "core_book"."title", "core_book"."description", "core_book"."reading_list_id" FROM "core_book" ORDER BY "core_book"."title" DESC LIMIT 5 OFFSET 5




Or, it could be written all on a single line. There's no need (other than
neatness or readability) to do it one step at a time with temproary variables
as we did in the previous example:


    >>> qs = Book.objects.all().order_by('-title')[5:10]
    >>> print(qs)
    <QuerySet [<Book: The Worm Ouroboros>, <Book: The Way of Kings>, <Book: The War of the Worlds>, <Book: The Time Machine>, <Book: The Storm Before the Storm: The Beginning of the End of the Roman Republic>]>
    >>> print(qs.query)
    SELECT "core_book"."id", "core_book"."title", "core_book"."description", "core_book"."reading_list_id" FROM "core_book" ORDER BY "core_book"."title" DESC LIMIT 5 OFFSET 5



# Challenge 3


Using filter we can add WHERE clauses to our SQL statements.  Here we are
testing out the "gt" (greater than) operator to find Reading List objects that
views in excess of 100:

    >>> from apps.core.models import ReadingList, Book

    >>> qs = ReadingList.objects.filter(views__gt=100)
    >>> print(qs)
    <QuerySet [<ReadingList: My kids LOVE these books>]>
    >>> print(qs.query)
    SELECT "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."created", "core_readinglist"."last_modified", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views" FROM "core_readinglist" WHERE "core_readinglist"."views" > 100



Alternatively, instead of filter we can use it's opposite, exclude. That will
filter with a "NOT" or inverting operator in SQL, causing the opposite
selection to be returned:


    >>> qs = ReadingList.objects.exclude(category='fiction')
    >>> print(qs)
    <QuerySet [<ReadingList: Favorite books on history and geography>]>
    >>> print(qs.query)
    SELECT "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."created", "core_readinglist"."last_modified", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views" FROM "core_readinglist" WHERE NOT ("core_readinglist"."category" = fiction)


We can do exact queries based on title, like before:

    >>> qs = ReadingList.objects.filter(title='Dystopian YA')
    >>> print(qs)
    <QuerySet [<ReadingList: Dystopian YA>]>
    >>> print(qs.query)
    SELECT "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."created", "core_readinglist"."last_modified", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views" FROM "core_readinglist" WHERE "core_readinglist"."title" = Dystopian YA


Or if we have multiple values, we can use in to select either or:

    >>> titles = ['Great American Novels', 'Dystopian YA']
    >>> qs = ReadingList.objects.filter(title__in=titles)
    >>> print(qs)
    <QuerySet [<ReadingList: Dystopian YA>, <ReadingList: Great American Novels>]>
    >>> print(qs.query)
    SELECT "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."created", "core_readinglist"."last_modified", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views" FROM "core_readinglist" WHERE "core_readinglist"."title" IN (Great American Novels, Dystopian YA)


Finally, we can use icontains to search through (case-insensitive) all the
title, for anything to match:

    >>> qs = ReadingList.objects.filter(title__icontains='science')
    >>> print(qs)
    <QuerySet [<ReadingList: Most misinterpreted science-fiction books>, <ReadingList: My favorite science fiction books>, <ReadingList: The origins of science fiction>]>
    >>> print(qs.query)
    SELECT "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."created", "core_readinglist"."last_modified", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views" FROM "core_readinglist" WHERE "core_readinglist"."title" LIKE %science% ESCAPE '\'


# Challenge 4




    >>> from apps.core.models import ReadingList, Book


In this example, we're combining both filter and exclude for a more complicated
query:

    >>> qs = ReadingList.objects.filter(category='nonfiction').exclude(views__gt=5)
    >>> print(qs)
    <QuerySet [<ReadingList: Favorite books on history and geography>]>
    >>> print(qs.query)
    SELECT "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."created", "core_readinglist"."last_modified", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views" FROM "core_readinglist" WHERE ("core_readinglist"."category" = nonfiction AND NOT ("core_readinglist"."views" > 5))



By using the | operator (technically called "bitwise OR" in Python), we can add
as many OR clauses as we want to our queries, combining multiple queries and
getting all sorts of data in one trip to the database:

    >>> childrens_books = ReadingList.objects.filter(category='children')
    >>> pop_fiction = ReadingList.objects.filter(category='fiction').filter(views__gt=5)
    >>> either_pop_fiction_or_childrens = pop_fiction | childrens_books
    >>> print(either_pop_fiction_or_childrens)
    <QuerySet [<ReadingList: Fantasy books I recently read>, <ReadingList: My kids LOVE these books>]>
    >>> print(either_pop_fiction_or_childrens.query)
    SELECT "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."created", "core_readinglist"."last_modified", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views" FROM "core_readinglist" WHERE (("core_readinglist"."category" = fiction AND "core_readinglist"."views" > 5) OR "core_readinglist"."category" = children)



By using the | operator (technically called "bitwise AND" in Python), we can add
as many AND clauses as we want to our queries. This is equivalent to just
adding more filters, but is often more convenient as queries get very
complicated:

    >>> popular_books = ReadingList.objects.filter(views__gt=5)
    >>> nonfiction = ReadingList.objects.filter(category='fiction')
    >>> both_popular_and_nonfiction = popular_books & nonfiction
    >>> print(both_popular_and_nonfiction)
    <QuerySet [<ReadingList: Fantasy books I recently read>, <ReadingList: My kids LOVE these books>]>
    >>> print(both_popular_and_nonfiction.query)
    SELECT "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."created", "core_readinglist"."last_modified", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views" FROM "core_readinglist" WHERE ("core_readinglist"."views" > 5 AND "core_readinglist"."category" = fiction)





# Challenge 5



    >>> from apps.core.models import ReadingList, Book

    >>> from django.db.models import Sum, Max, Min, Avg


By using the Sum, Max, Min, and Avg functions built into Django, we can get a
dictionary containing information that is computed by the database, without
having to return everything from the database and compute it in Python (which
would be VERY impractical for more than 100 or so entries):

    >>> data = ReadingList.objects.all().aggregate(Sum('views'), Max('views'), Min('views'), Avg('views'))
    >>> print(data)
    {'views__sum': 175, 'views__max': 109, 'views__min': 1, 'views__avg': 17.5}
    >>> print(data['views__sum'])
    175


We can also combine this with filter, etc:

    >>> data = ReadingList.objects.filter(category='fiction').aggregate(Sum('views'), Max('views'), Min('views'), Avg('views'))
    >>> print(data)
    {'views__sum': 173, 'views__max': 109, 'views__min': 1, 'views__avg': 19.22222222222222}
    >>> print(data['views__sum'])







# Challenge 6

Remember the old adage "Premature optimization is the root of all evil"? Well,
this applies here too: Only use this if you know it will be more efficient, or
you need to use it for the GROUP BY SQL statement generation.


    >>> from apps.core.models import ReadingList, Book

    >>> from django.db.models import Sum, Count


Using "values" we can get a list of only the data we need in dictionary format.

    >>> data = ReadingList.objects.all().values('id', 'title')
    >>> print(data)
    <QuerySet [{'id': 1, 'title': 'Fantasy books I recently read'}, {'id': 2, 'title': 'Favorite books on history and geography'}, {'id': 3, 'title': 'Most misinterpreted science-fiction books'}, {'id': 4, 'title': 'My favorite science fiction books'}, {'id': 5, 'title': 'Dystopian YA'}, {'id': 6, 'title': 'My kids LOVE these books'}, {'id': 7, 'title': '19th Century Classics'}, {'id': 8, 'title': 'Great American Novels'}, {'id': 9, 'title': 'The origins of science fiction'}, {'id': 10, 'title': 'Early Adult Fantasy Novels'}]>


Using `values_list` it's just like `values` except it will return it as a
Tuple. If we include "flat", then it will flatten all the data into a single
list, which is sometimes useful when we truly don't care about anything other
than a single field:

    >>> data = ReadingList.objects.all().values_list('title', flat=True)
    >>> print(data)
    <QuerySet ['Fantasy books I recently read', 'Favorite books on history and geography', 'Most misinterpreted science-fiction books', 'My favorite science fiction books', 'Dystopian YA', 'My kids LOVE these books', '19th Century Classics', 'Great American Novels', 'The origins of science fiction', 'Early Adult Fantasy Novels']>


Finally, using values combined with annotate, we can generate GROUP BY
expressions that do more complicated aggregations:

    >>> data = ReadingList.objects.all().values('category').annotate(total_views=Sum('views'), number=Count('id'))
    >>> print(data)
    <QuerySet [{'category': 'fiction', 'total_views': 173, 'number': 9}, {'category': 'nonfiction', 'total_views': 2, 'number': 1}]>
    >>> print(data.query)
    SELECT "core_readinglist"."category", SUM("core_readinglist"."views") AS "total_views", COUNT("core_readinglist"."id") AS "number" FROM "core_readinglist" GROUP BY "core_readinglist"."category"


