# This is some example code using Authors and Books for an imaginary
# GoodReads-type application to demonstrate how ModelForms are used.


################## In our models.py
from django.db import models


# Here we define an Author model for our database, for storing Authors
class Author(models.Model):
    name = models.CharField(max_length=100)
    pen_name = models.CharField(max_length=100)
    birth_date = models.DateField()

# And here we define a book, which has title, a page count, and an author
# (Note: The author is using something called a "ForeignKey" -- we'll get to
# this in the next exercise!)
class Book(models.Model):
    title = models.CharField(max_length=100)
    page_count = models.PositiveIntegerField()
    author = models.ForeignKey(Author)







################## In our views.py
from django import forms
from .models import Author, Book

# Finally, we generate a form to update or create new Authors. This is the
# equivalent of making a form with 3 fields corresponding to the Model. We can
# use the following syntax:
class AuthorForm(forms.ModelForm):
    class Meta:
        model = Author
        # When using ModelForms, you need to explicitly list which fields
        # should be exposed for editing, as such:
        fields = ['name', 'pen_name', 'birth_date']

# And a form for Books, too!
class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'page_count', 'author']



def create_new_book(request):
    if request.method == 'POST':
        form = BookForm(request.POST)
        if form.is_valid():
            # Instead of having to manually copy over the data from the form
            # into the new Book instance, we can use the ModelForm to
            # "auto-create" the book from the data they entered.
            # All we need to do is call the form.save(), and it will create a
            # new book right then and there.
            form.save()
    else:
        form = BookForm()

    context = {
        'form': form,
    }
    return render(request, 'pages/update_book_form.html', context)


# We can also use ModelForms to update existing data in our database.
def update_existing_book(request, book_id):
    book = Book.objects.get(id=book_id)

    if request.method == 'POST':
        form = BookForm(request.POST, instance=book)
        if form.is_valid():
            # Instead of having to manually update the book, calling .save() on
            # the ModelForm will automatically update the book specified with
            # everything entered, saving us A LOT of code.
            form.save()
    else:
        form = BookForm(instance=book)

    context = {
        'form': form,
    }
    return render(request, 'pages/update_book_form.html', context)

