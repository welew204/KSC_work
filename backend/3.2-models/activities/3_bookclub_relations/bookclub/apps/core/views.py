from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

from apps.core.helpers import get_book_cover_url_from_api, redirect_back
from apps.core.models import Book, ReadingList
from apps.core.forms import AddBookForm, AddReadingListForm


def homepage(request):
    # R in CRUD --- READ ReadingLists from database
    # Using order_by('-votes') we'll get it with most votes on top
    reading_lists = ReadingList.objects.all().order_by('-votes')
    context = {
        'all_reading_lists': reading_lists,
    }
    return render(request, 'pages/home.html', context)


def reading_list_details(request, list_id):
    # R in CRUD --- READ a single ReadingList & its books from database
    reading_list_requested = ReadingList.objects.get(id=list_id)
    books = Book.objects.all()

    # : We need to modify this to only show the books relevant to the
    # current reading list. Something like:
    books = Book.objects.filter(reading_list=list_id)

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

            logged_in_user = request.user
            print('Current user:', logged_in_user)

            ReadingList.objects.create(
                name=form.cleaned_data['name'],
                topic=form.cleaned_data['topic'],
                creator_user=logged_in_user

                # TODO: We need to add code here to save the Reading List as
                # being "related" to the user who is currently logged in.
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
def create_book(request, list_id):
    # C in CRUD --- CREATE books in database
    reading_list_requested = ReadingList.objects.get(id=list_id)

    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = AddBookForm(request.POST)
        if form.is_valid():

            url = get_book_cover_url_from_api(form.cleaned_data['title'])

            Book.objects.create(
                title=form.cleaned_data['title'],
                description=form.cleaned_data['description'],
                cover_url=url,
                reading_list=reading_list_requested
                # : We need to add code here to save the book as being
                # "related" to the current Reading List.
            )

            # Redirect back to the reading list we were at
            return redirect('/list/' + str(reading_list_requested.id) + '/')
    else:
        # if a GET  we'll create a blank form
        form = AddBookForm()
    context = {
        'form': form,
    }
    return render(request, 'pages/form_page.html', context)


@login_required
def reading_list_delete(request, list_id):
    # D in CRUD --- DELETE reading list from database
    readinglist = ReadingList.objects.get(id=list_id)
    readinglist.delete()
    return redirect_back('/')


@login_required
def delete_book(request, book_id):
    # D in CRUD, increase the votes count
    book = Book.objects.get(id=book_id)
    book.delete()
    return redirect_back(request)


@login_required
def reading_list_vote_up(request, list_id):
    # U in CRUD, increase the votes count
    reading_list = ReadingList.objects.get(id=list_id)
    # TODO: Bonus: Keep users from voting twice
    reading_list.votes = reading_list.votes + 1
    reading_list.save()
    return redirect_back(request)


@login_required
def reading_list_vote_down(request, list_id):
    # U in CRUD, decrease the votes count
    reading_list = ReadingList.objects.get(id=list_id)
    # TODO: Bonus: Keep users from voting twice
    reading_list.votes = reading_list.votes - 1
    reading_list.save()
    return redirect_back(request)
