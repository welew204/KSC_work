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
            print('----- TODO: I should generate new users here!')
            print(username)
            print('---------')
            return redirect('/')

    else:
        # if a GET we'll create a blank form
        form = NewUserForm()

    # Challenge 3: TODO Add code here to fetch users from the database
    # from django.contrib.auth.models import User
    # users = User.objects.all()

    context = {
        # 'users': users,
        'form': form,
    }
    return render(request, 'pages/home.html', context)


def feed(request):
    # Bonus Challenge: TODO Prevent unauthenticated
    # users from accessing this page

    # For now, it does not do anything beyond that.

    context = {
    }

    return render(request, 'pages/feed.html', context)

