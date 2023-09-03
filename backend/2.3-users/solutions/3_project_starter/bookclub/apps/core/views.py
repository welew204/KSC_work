from django.shortcuts import render
from django.shortcuts import redirect
from django import forms

import requests # Bonus Challenge 4

from .models import Book

# Form for adding new books to the reading list
class AddBookForm(forms.Form):
    title = forms.CharField()
    description = forms.CharField(widget=forms.Textarea)

def home(request):
    form = AddBookForm()

    all_books = Book.objects.all()

    if request.method == 'POST':
        # Create a form instance and populate it with data from the request
        form = AddBookForm(request.POST)
        if form.is_valid():


            ############################################################
            # Bonus Challenge 4
            title = form.cleaned_data['title']
            response = requests.get(f'http://openlibrary.org/search.json?title={title}&limit=1')
            data = response.json()
            if data['num_found'] > 0:
                cover_id = data['docs'][0]['cover_i']
                url = f'http://covers.openlibrary.org/b/id/{cover_id}-S.jpg'
            else:
                url = ''
            ############################################################

            Book.objects.create(
                title=form.cleaned_data['title'],
                description=form.cleaned_data['description'],
                cover_url=url,
            )

            return redirect('/')
    else:
        # if a GET  we'll create a blank form
        form = AddBookForm()

    context = {
        'book_list': all_books,
        'form': form,
    }
    return render(request, 'pages/home.html', context)



def about(request):
    context = {
    }

    return render(request, 'pages/about.html', context)



def delete_book(request):
    # BONUS CHALLENGE 3
    id_number = request.POST['book_id']
    Book.objects.get(id=id_number).delete()
    return redirect('/')

