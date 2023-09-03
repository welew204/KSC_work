from django.shortcuts import render, redirect
from django import forms
from django.contrib import messages
from django.contrib.auth.models import User


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

    if request.method == 'POST':

        # Create a form instance and populate it with data from the request
        form = PostForm(request.POST)

        if form.is_valid():
            # Challenge 4: TODO this should make WallPost objects instead
            username = request.user.username
            text = form.cleaned_data['text']
            print('The username', username)
            print('The text', text)
            print('TODO: Need to actually post this message')
            return redirect('/feed/')

    else:
        # if a GET  we'll create a blank form
        form = PostForm()

    # Challenge 5: TODO have this fetch the posts from the database
    context = {
        'form': form,
    }

    return render(request, 'pages/feed.html', context)



def search(request):
    term = ''
    found_posts = []

    # Bonus Challenge 1: TODO make this work with the new model
    if 'query' in request.GET:
        term = request.GET['query']
        print('they wanna find this:', term)

    context = {
        'term': term,
        'posts': found_posts,
    }
    return render(request, 'pages/search.html', context)
