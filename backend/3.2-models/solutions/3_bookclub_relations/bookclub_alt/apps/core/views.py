from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib import messages
from apps.core.models import Book, ReadingList
from django.contrib.auth.decorators import login_required

# Putting it on separate lines since it was getting too long
from apps.core.forms import (
    AddBookForm,
    EditBookForm,
    AddReadingListForm,
    EditReadingListForm,
)

def reading_list_home(request):
    # R in CRUD --- READ ReadingLists from database

    # Using order_by('-votes') we'll get it with most votes on top
    reading_lists = ReadingList.objects.all().order_by('-votes')
    context = {
        'all_reading_lists': reading_lists,
    }
    return render(request, 'pages/home.html', context)

def reading_list_details(request, list_id):
    # R in CRUD --- READ books from database
    # This is more or less already finished!
    reading_list_requested = ReadingList.objects.get(id=list_id)

    # Only get the books relevant to this reading list
    books = Book.objects.filter(reading_list=reading_list_requested)
    context = {
        'reading_list': reading_list_requested,
        'all_books': books,
    }
    return render(request, 'pages/details.html', context)

@login_required
def reading_list_create(request):
    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = AddReadingListForm(request.POST)
        if form.is_valid():
            # C in CRUD --- CREATE reading list in database

            # TODO: Associate the list with the current user
            logged_in_user = request.user

            ReadingList.objects.create(
                name=form.cleaned_data['name'],
                topic=form.cleaned_data['topic'],
                creator_user=logged_in_user,
            )
            return redirect('/')
    else:
        # if a GET  we'll create a blank form
        form = AddReadingListForm()
    context = {
        'form': form,
    }
    return render(request, 'pages/form_page.html', context)


@login_required
def reading_list_delete(request, list_id):
    # D in CRUD --- DELETE reading list from database
    readinglist = ReadingList.objects.get(id=list_id)
    readinglist.delete()
    return redirect('/')


@login_required
def reading_list_update(request, list_id):
    # U in CRUD --- UPDATE reading list in database
    reading_list = ReadingList.objects.get(id=list_id)

    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = EditReadingListForm(request.POST)
        if form.is_valid():
            # U in CRUD --- UPDATE reading lists in database
            # Update the topic property on the reading list being edited
            reading_list.topic = form.cleaned_data['topic']

            # Actually save the changes to the database
            reading_list.save()
            return redirect('/') # Redirect back to reading list page
    else:
        # If a GET, instead of making a totally blank form like we normally do,
        # we'll fill it in the with the data already in the Reading List
        initial_data = {
            'name': reading_list.name,
        }
        form = EditReadingListForm(initial=initial_data)

    context = {
        'form': form,
    }

    return render(request, 'pages/form_page.html', context)


@login_required
def reading_list_create_book(request, list_id):
    reading_list_requested = ReadingList.objects.get(id=list_id)

    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = AddBookForm(request.POST)
        if form.is_valid():
            # C in CRUD --- CREATE books in database

            # Advanced bonus challenge:
            from .helpers import get_book_cover_url_from_api
            url = get_book_cover_url_from_api(form.cleaned_data['title'])

            username = request.user.username # Get the current logged-in username
            Book.objects.create(
                title=form.cleaned_data['title'],
                description=form.cleaned_data['description'],
                reading_list=reading_list_requested,
                cover_url=url,
            )
            return redirect(f'/list/{reading_list_requested.id}/')
    else:
        # if a GET  we'll create a blank form
        form = AddBookForm()
    context = {
        'form': form,
    }
    return render(request, 'pages/form_page.html', context)


@login_required
def reading_list_delete_book(request, list_id, book_id):
    reading_list = ReadingList.objects.get(id=list_id)
    book = Book.objects.get(id=book_id)
    book.delete()
    return redirect(f'/list/{reading_list.id}/')

@login_required
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

            # Advanced bonus challenge:
            from .helpers import get_book_cover_url_from_api
            url = get_book_cover_url_from_api(book_being_edited.title)
            book_being_edited.cover_url = url

            # Actually save the changes to the database
            book_being_edited.save()
            return redirect(f'/list/{reading_list.id}/')
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
    return render(request, 'pages/form_page.html', context)



@login_required
def reading_list_vote_up(request, list_id):
    # U in CRUD, update the reading list based on
    reading_list = ReadingList.objects.get(id=list_id)
    reading_list.votes = reading_list.votes + 1
    reading_list.save()
    return redirect('/')

@login_required
def reading_list_vote_down(request, list_id):
    # U in CRUD, update the reading list based on
    reading_list = ReadingList.objects.get(id=list_id)
    reading_list.votes = reading_list.votes - 1
    reading_list.save()
    return redirect('/')

