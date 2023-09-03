from django.shortcuts import render, redirect
from django import forms
from django.contrib import messages
from django.contrib.auth.models import User


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
            username = form.cleaned_data['username']
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            password = form.cleaned_data['password']
            email = form.cleaned_data['email']

            User.objects.create(
                username=username,
                first_name=first_name,
                last_name=last_name,
                password=password,
                email=email,
            )

            # Another way to do it, condensed:
            #User.objects.create(
            #    username=form.cleaned_data['username'],
            #    first_name=form.cleaned_data['first_name'],
            #    last_name=form.cleaned_data['last_name'],
            #    password=form.cleaned_data['password'],
            #    email=form.cleaned_data['email'],
            #)


            # NOTE: There is actually a better way to create users in Django!
            # This will work, but the password will be invalid due to some
            # details on how passwords are stored with Django. The correct way
            # is as easy to use, and mentioned here:
            # https://docs.djangoproject.com/en/2.1/topics/auth/default/#creating-users

            # (The reason we are learning the "less correct" way is because it
            # is more consistent and better for learning :) )

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

    context = {
    }

    return render(request, 'pages/feed.html', context)

