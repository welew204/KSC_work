from django.shortcuts import render, redirect
from django import forms
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib import auth

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
            user = User.objects.create_user(
                username=form.cleaned_data['username'],
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name'],
                password=form.cleaned_data['password'],
                email=form.cleaned_data['email'],
            )
            # As soon as our new user is created, we make this user be
            # instantly "logged in"
            auth.login(request, user)
            return redirect('/')

    else:
        # if a GET we'll create a blank form
        form = NewUserForm()

    context = {
        'form': form,
    }
    return render(request, 'pages/home.html', context)


def all_users(request):
    users = User.objects.all()
    context = {
        'users': users,
    }
    return render(request, 'pages/user_list.html', context)



def user_feed(request, the_username):
    user = User.objects.get(username=the_username)

    context = {
        'fname': user.first_name,
        'lname': user.last_name,
        'email': user.email,
        'username': the_username,
    }
    return render(request, 'pages/feed.html', context)



def view_city(request, city_name):
    context = {
        'city_name': city_name,
    }
    return render(request, 'pages/view_city.html', context)


def user_feed_by_id(request, user_id):
    user = User.objects.get(id=user_id)

    context = {
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'username': user.username,
    }
    return render(request, 'pages/feed.html', context)



