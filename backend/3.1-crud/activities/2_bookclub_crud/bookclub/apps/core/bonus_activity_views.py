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
    reading_list = ReadingList.objects.get(id=list_id)
    rl_name = reading_list.name

    # Only get the books relevant to this reading list
    books = Book.objects.filter(reading_list_name=rl_name)
    context = {
        'reading_list': reading_list,
        'all_books': books,
    }
    return render(request, 'reading_list_pages/home_bonus.html', context)


def reading_list_create_book(request, list_id):

    # HINT: Copy the code from the original create book here, except be sure to
    # set the name of the reading list to be the current reading list's name,
    # and then redirect back to the reading list page

    return render(request, 'pages/new_book.html', context)


def reading_list_delete_book(request, list_id, book_id):

    # HINT: Copy the code from the original delete book here, except redirect
    # back to the reading list page that we came from.

    return redirect('/')


def reading_list_update_book(request, list_id, book_id):

    # HINT: Copy the code from the original update book here, except redirect
    # back to the reading list page that we came from.

    return render(request, 'pages/update_book.html', context)

