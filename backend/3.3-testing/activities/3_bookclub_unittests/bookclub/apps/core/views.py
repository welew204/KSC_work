from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from django.core.exceptions import SuspiciousOperation

from apps.core.models import Book, ReadingList
from apps.core.forms import AddBookForm, AddReadingListForm


def reading_list_home(request):
    # R in CRUD --- READ ReadingLists from database

    reading_lists = ReadingList.objects.all().select_related('creator_user')

    # Let's sort by their "score"
    reading_lists = reading_lists.order_by('-score')

    # And "paginate" the results (split them into pages)
    # https://docs.djangoproject.com/en/3.0/topics/pagination/
    page_number = request.GET.get('page', 1)
    paginator = Paginator(reading_lists, 4)
    results_page = paginator.page(page_number)

    context = {
        'results_page': results_page,
    }
    return render(request, 'pages/home.html', context)


def reading_list_details(request, list_id):
    # R in CRUD --- READ a single ReadingList & its books from database
    reading_list_requested = ReadingList.objects.get(id=list_id)

    # Count views of pages for determining what's popular
    reading_list_requested.increment_views()

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
            # If we had omitted commit=False, then the user would not have been
            # properly set-up
            new_reading_list = form.save(commit=False)
            new_reading_list.creator_user = request.user
            new_reading_list.save()
            return redirect(new_reading_list.get_absolute_url())
    else:
        # if a GET  we'll create a blank form
        form = AddReadingListForm()
    context = {
        'form': form,
        'form_title': 'New book list',
    }
    return render(request, 'pages/form_page.html', context)


@login_required
def reading_list_delete(request, list_id):
    # D in CRUD --- DELETE reading list from database
    readinglist = ReadingList.objects.get(id=list_id)

    # Prevent users who are not the owner user from deleting this
    if readinglist.creator_user != request.user:
        raise SuspiciousOperation('Attempted to delete wrong list')

    readinglist.delete()
    return redirect('/')


@login_required
def reading_list_create_book(request, list_id):
    # C in CRUD --- CREATE books in database
    reading_list_requested = ReadingList.objects.get(id=list_id)

    # DONE: BONUS CHALLENGE - Uncomment this to fix the security defect
    if reading_list_requested.creator_user != request.user:
        raise SuspiciousOperation('Attempted to add book to wrong list')

    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = AddBookForm(request.POST)
        if form.is_valid():
            book = form.save(commit=False)
            book.reading_list = reading_list_requested
            book.save()

            # Redirect back to the reading list we were at
            return redirect(reading_list_requested.get_absolute_url())
    else:
        # if a GET  we'll create a blank form
        form = AddBookForm()
    context = {
        'form': form,
        'form_title': 'Add book',
    }
    return render(request, 'pages/form_page.html', context)


@login_required
def reading_list_delete_book(request, book_id):
    # D in CRUD, delete book
    book = Book.objects.get(id=book_id)

    # Ensure that the creator of the reading list of the book is indeed the
    # person requesting that the book be deleted
    # DONE: Challenge 4 Uncomment this to fix the security defect
    if book.reading_list.creator_user != request.user:
        raise SuspiciousOperation('Attempted to delete book to wrong list')

    book.delete()

    return redirect(book.reading_list.get_absolute_url())
