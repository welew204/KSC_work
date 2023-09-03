from django.shortcuts import render, redirect
from django import forms
from django.contrib import messages
from django.contrib.auth.models import User

from .models import WallPost

class PostForm(forms.Form):
    text = forms.CharField(widget=forms.Textarea)


class NewUserForm(forms.Form):
    username = forms.CharField(max_length=100)
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput)
    email = forms.EmailField()


def homepage(request):
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request
        form = NewUserForm(request.POST)

        if form.is_valid():
            # Create a new user object populated with the data we are
            # giving it from the cleaned_data form
            User.objects.create(
                username=form.cleaned_data['username'],
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name'],
                password=form.cleaned_data['password'],
                email=form.cleaned_data['email'],
            )
            return redirect('/')

    else:
        # if a GET we'll create a blank form
        form = NewUserForm()

    users = User.objects.all()

    context = {
        'users': users,
        'form': form,
    }
    return render(request, 'pages/home.html', context)


def feed(request):
    if not request.user.is_authenticated:
        # Use Django's built-in "messages" system to us send the user a
        # message that appears on whatever next page they visit
        messages.warning(request, "You need to log in to view the feed")
        return redirect('/')

    if request.method == 'POST':

        # Create a form instance and populate it with data from the request
        form = PostForm(request.POST)

        if form.is_valid():
            WallPost.objects.create(
                username=request.user.username,
                text=form.cleaned_data['text'],
            )
            return redirect('/feed/')

    else:
        # if a GET  we'll create a blank form
        form = PostForm()

    posts = WallPost.objects.all()
    context = {
        'posts': posts,
        'form': form,
    }

    return render(request, 'pages/feed.html', context)



def search(request):
    term = ''
    found_posts = []

    if 'query' in request.GET:
        term = request.GET['query']
        found_posts = WallPost.objects.filter(
            text__icontains=term,
        )

    context = {
        'term': term,
        'posts': found_posts,
    }
    return render(request, 'pages/search.html', context)
