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
            # NOTE: Common gotcha: Only for User objects is it "create_user".
            # For everything else, it is just "create"
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



def user_feed(request, username):
    user = User.objects.get(username=username)

    if request.method == 'POST':

        # Create a form instance and populate it with data from the request
        form = PostForm(request.POST)

        if form.is_valid():
            # Create a new WallPost object populated with the data we are
            # giving it from the cleaned_data form

            ##### TODO CREATE -- use the current username

            # HINT 1: To create a new wall post, do something like this:
            # WallPost.objects.create(
            #     text="testing text...",
            #     username="testing username",
            # )

            # HINT 2: You'll need to replace the stuff in quotes with
            # something. Probably something from a form, and one other
            # source...

            # HINT 3: 
            # text = form.cleaned_data['text']
            # print(text)
            # username = request.user.username
            # print(username)

            # This will just redirect to the current page
            return redirect(request.get_full_path())

    else:
        # if a GET we'll create a blank form
        form = PostForm()

    #### TODO READ
    # We need to get all the posts for this user's username
    # HINT: 
    # posts = ...SOMETHING GOES HERE, using .filter and/or .all...

    context = {
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'username': username,
        'form': form,
        #'posts': posts,
    }
    return render(request, 'pages/feed.html', context)




def delete_post(request, post_id):
    print('Getting delete request for post with ID:', post_id)
    #### TODO DELETE
    # Fetch the right WallPost with the post_id, then delete it.

    # HINT: Look at your cheatsheet, and the demo activity.

    # Cool trick to redirect to the previous page
    return redirect(request.META.get('HTTP_REFERER', '/'))




def update_post(request, post_id):
    new_text = request.POST['text']
    print('Getting delete request for post with ID:', post_id)
    print('Should change text to:', new_text)
    #### TODO UPDATE
    # Load post and then update with new_text
    # HINT: Look at your cheatsheet, and the demo activity.

    # Cool trick to redirect to the previous page
    return redirect(request.META.get('HTTP_REFERER', '/'))

