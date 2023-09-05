# This type of code goes into your views.py, inside each view function
from .models import Book


# .get                    --- singular
# .filter, .all, .exclude --- plural

#######################################
########### CRUD for single objects   #
#######################################

### CREATE
# Create a single Book object and save in DB
book = Book.objects.create(
    title="Great Expectations",
    num_stars=4,
)
print(book.id)
print(book.title)
print(book.num_stars)

### READ
# Fetch a single book object from the DB.
my_book = Book.objects.get(title="Great Expectations")
print(my_book.title)    # Printing info, for debugging...
print(my_book.num_stars)
# ...or can be used in template context...
context = {
    'title': my_book.title,
}


### UPDATE
# Fetch a single book object, then change it
# Starts just like READ but we update something
the_book = Book.objects.get(title="Great Expectations")
the_book.num_stars = 5  # Updates a single property
the_book.save()         # Saves the change to the DB


### DELETE
# Fetch a single book object, then delete it
the_book = Book.objects.get(title="Great Expectations")
the_book.delete()



#######################################
########### CRUD for multiple objects #
#######################################

# When we do Reading, Updating, or Deleting multiple objects, the term Django
# uses for this list-like thing is a "QuerySet"

### READ
# Get all fiction books to loop through
fiction_books = Book.objects.filter(category="fict")
# Get all 4+ star books, newest first
new_good_books = (
    Book.objects.filter(num_stars__gt=3)
    .order_by("-date")
)

### UPDATE
# Get all nonfiction books, and update them ALL to
# have 5 stars
nonfict = Book.objects.filter(category="nonfict")
nonfict.update(num_stars=5)  # Updates all books

### DELETE
# Delete ALL books that have 1 star
bad_books = Book.objects.filter(num_stars=1)
bad_books.delete()  # Delete every 1 star book




# More advance reads
Book.objects\
    .filter(author="Charles Dickens")\
    .exclude(publication_date=1878)\
    .order_by("date")

# NOTE: This file can't be run as-is, since it is not a real Django project, it
# is just being provided as an example
