from django.shortcuts import render
from django.shortcuts import redirect
from django import forms

# Bonus-activity related views are in their own file; ignore for now
from .bonus_activity_views import *

from .models import Book, ReadingList

class AddBookForm(forms.Form):
    title = forms.CharField()
    description = forms.CharField(widget=forms.Textarea)

class EditBookForm(forms.Form):
    # For now, the edit book form will be the same as the add book form
    title = forms.CharField()
    description = forms.CharField(widget=forms.Textarea)


GENRES = [
    ('fiction', 'Adult Fiction'),
    ('nonfiction', 'Adult Non-Fiction'),
    ('children', "Children's Books"),
]
class AddReadingListForm(forms.Form):
    name = forms.CharField()
    # The "choices=GENRES" limits the input to be a drop down based on the
    # GENRES list above
    topic = forms.ChoiceField(choices=GENRES)

class EditReadingListForm(forms.Form):
    # We can't change the name after creation, only the topic
    topic = forms.ChoiceField(choices=GENRES)


def home(request):
    # R in CRUD --- READ books from database
    books = Book.objects.all()
    context = {
        'all_books': books,
    }
    return render(request, 'pages/home.html', context)

def create_book(request):
    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = AddBookForm(request.POST)
        if form.is_valid():
            # C in CRUD --- CREATE books in database
            Book.objects.create(
                title=form.cleaned_data['title'],
                description=form.cleaned_data['description'],
            )
            return redirect('/')
    else:
        # if a GET  we'll create a blank form
        form = AddBookForm()
    context = {
        'form': form,
    }
    return render(request, 'pages/new_book.html', context)


def delete_book(request, book_id):
    # D in CRUD --- DELETE books from database
    book = Book.objects.get(id=book_id)
    book.delete()
    return redirect('/')

def update_book(request, book_id):
    # Based on the URL, we retrieve the book_id
    book_being_edited = Book.objects.get(id=book_id)

    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = EditBookForm(request.POST)
        if form.is_valid():
            # U in CRUD --- UPDATE books in database
            # Update the properties on the book being edited
            book_being_edited.title = form.cleaned_data['title']
            book_being_edited.description = form.cleaned_data['description']

            # Actually save the changes to the database
            book_being_edited.save()
            return redirect('/') # Redirect back to main-page
    else:
        # If a GET, instead of making a totally blank form like we normally do,
        # we'll fill it in the with the data already in the book
        initial_book_data = {
            'title': book_being_edited.title,
            'description': book_being_edited.description,
        }
        form = EditBookForm(initial=initial_book_data)

    context = {
        'form': form,
    }
    return render(request, 'pages/update_book.html', context)

#
# Reading lists CRUD views are below:
def reading_list_read(request):
    # R in CRUD --- READ reading list from database
    context = {
    }
    return render(request, 'reading_list_pages/home.html', context)

def reading_list_create(request):
    # C in CRUD --- CREATE reading list in database
    context = {
    }
    return render(request, 'reading_list_pages/create.html', context)

def reading_list_delete(request, list_id):
    # D in CRUD --- DELETE reading list from database
    return redirect('/reading-list/')

def reading_list_update(request, list_id):
    # U in CRUD --- UPDATE reading list in database
    context = {
    }
    return render(request, 'reading_list_pages/update.html', context)

