from django.shortcuts import render
from django.shortcuts import redirect
from django import forms

from .models import Book, ReadingList

class AddBookForm(forms.Form):
    title = forms.CharField()
    description = forms.CharField(widget=forms.Textarea)

class EditBookForm(forms.Form):
    title = forms.CharField()
    description = forms.CharField(widget=forms.Textarea)

def reading_list_details(request, list_id):
    # R in CRUD --- READ books from database
    # This is more or less already finished!
    reading_list = ReadingList.objects.get(id=list_id)
    # Only get the books relevant to this reading list
    books = Book.objects.filter(reading_list_name=reading_list.name)
    context = {
        'reading_list': reading_list,
        'all_books': books,
    }
    return render(request, 'reading_list_pages/home_bonus.html', context)

def reading_list_create_book(request, list_id):
    reading_list = ReadingList.objects.get(id=list_id)
    the_name = reading_list.name

    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = AddBookForm(request.POST)
        if form.is_valid():
            # C in CRUD --- CREATE books in database
            Book.objects.create(
                title=form.cleaned_data['title'],
                description=form.cleaned_data['description'],
                reading_list_name=the_name,
            )
            return redirect(f'/reading-list/{reading_list.id}/')
    else:
        # if a GET  we'll create a blank form
        form = AddBookForm()
    context = {
        'form': form,
    }
    return render(request, 'pages/new_book.html', context)


def reading_list_delete_book(request, list_id, book_id):
    reading_list = ReadingList.objects.get(id=list_id)
    book = Book.objects.get(id=book_id)
    book.delete()
    return redirect(f'/reading-list/{reading_list.id}/')

def reading_list_update_book(request, list_id, book_id):
    reading_list = ReadingList.objects.get(id=list_id)
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
            return redirect(f'/reading-list/{reading_list.id}/')
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

