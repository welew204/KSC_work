from django.shortcuts import render, redirect
from django import forms

from .models import (
    FaceboopFanPage,
    FaceboopPost,
)

class PostForm(forms.Form):
    username = forms.CharField(max_length=100)
    text = forms.CharField(widget=forms.Textarea)

class NewFanPageForm(forms.Form):
    image = forms.URLField(max_length=100, required=False)
    password = forms.CharField(widget=forms.PasswordInput)

    name = forms.CharField(max_length=100)
    date_joined = forms.DateField(widget=forms.SelectDateWidget)
    email = forms.EmailField()

def homepage(request):
    fan_pages = FaceboopFanPage.objects.all()
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request:
        form = NewFanPageForm(request.POST)

        # check whether it's valid:
        if form.is_valid():
            FaceboopFanPage.objects.create(
                name=form.cleaned_data['name'],
                image=form.cleaned_data['image'],
                email=form.cleaned_data['email'],
                password=form.cleaned_data['password'],
                date_joined=form.cleaned_data['date_joined'],
            )
            return redirect('/feed/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NewFanPageForm()


    context = {
        'fan_pages': fan_pages,
        'form': form,
    }
    return render(request, 'pages/home.html', context)

def feed(request):
    posts = FaceboopPost.objects.all()
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request:
        form = PostForm(request.POST)

        # check whether it's valid:
        if form.is_valid():
            FaceboopPost.objects.create(
                username=form.cleaned_data['username'],
                text=form.cleaned_data['text'],
            )
            return redirect('/feed/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = PostForm()

    context = {
        'posts': posts,
        'form': form,
    }

    return render(request, 'pages/feed.html', context)

def search(request):
    # Advanced bonus challenge
    term = ''
    found_posts = []

    if 'query' in request.GET:
        term = request.GET['query']
        # Django stuff here: This looks through all the post objects, plucking
        # out those whos text contains the term. The i before contains
        # ("__icontains") will make it case-insensitive.
        found_posts = FaceboopPost.objects.filter(
            text__icontains=term,
        )

    context = {
        'term': term,
        'posts': found_posts,
    }
    return render(request, 'pages/search.html', context)

