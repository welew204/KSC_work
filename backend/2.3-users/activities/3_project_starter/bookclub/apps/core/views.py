from django.shortcuts import render, redirect
from django import forms
from .models import Book

# Two example views. Change or delete as necessary.


class NewBookForm(forms.Form):
    title = forms.CharField(max_length=50)
    description = forms.CharField(widget=forms.Textarea)


def home(request):
    books = Book.objects.all()

    if request.method == 'POST':
        form = NewBookForm(request.POST)
        if form.is_valid():
            title = form.cleaned_data['title']
            description = form.cleaned_data['description']

            Book.objects.create(
                title=title,
                description=description
            )
            return redirect('/')
    else:
        form = NewBookForm()
        # print(form)

    context = {
        "form": form,
        "book_list": books,
    }

    return render(request, "pages/home.html", context)


def about(request):
    context = {}

    return render(request, "pages/about.html", context)
