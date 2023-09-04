from django.shortcuts import render, redirect
from django import forms
from django.contrib.auth.models import User


class PostForm(forms.Form):
    username = forms.CharField(max_length=100)
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
            # Challenge 4: TODO Add code here to create a new user
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
            return redirect('/')

    else:
        # if a GET we'll create a blank form
        form = NewUserForm()

    # Challenge 3: TODO Add code here to fetch users from the database

    users = User.objects.all()

    context = {
        'users': users,
        'form': form,
    }
    return render(request, 'pages/home.html', context)


def feed(request):
    # Bonus Challenge: TODO Prevent unauthenticated
    # users from accessing this page
    if not request.user.is_authenticated:
        print('user not logged in blech')
        # Do something....

    # For now, it does not do anything beyond that.

    context = {
    }

    return render(request, 'pages/feed.html', context)
