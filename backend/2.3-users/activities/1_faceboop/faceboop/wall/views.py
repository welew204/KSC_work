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
    name = forms.CharField(max_length=100)
    image = forms.URLField(max_length=100, required=False)
    password = forms.CharField(widget=forms.PasswordInput)
    date_joined = forms.DateField(widget=forms.SelectDateWidget)
    email = forms.EmailField(widget=forms.EmailInput)
    # Challenge 4: TODO Finish to include name, date joined, and email


def homepage(request):
    # Challenge 5: TODO: Use the finished NewFanPageForm to add a spot to
    # add new fan pages to the pages/home.html
    fan_pages = FaceboopFanPage.objects.all()

    if request.method == 'POST':
        form = NewFanPageForm(request.POST)
        print(form)

        if form.is_valid():
            name = form.cleaned_data["name"]
            image = form.cleaned_data["image"]
            password = form.cleaned_data["password"]
            date_joined = form.cleaned_data["date_joined"]
            email = form.cleaned_data["email"]

            FaceboopFanPage.objects.create(
                name=name,
                image=image,
                password=password,
                date_joined=date_joined,
                email=email
            )
            return redirect('/')

    else:
        form = NewFanPageForm()

    context = {
        'form': form,
        'fan_pages': fan_pages,
    }
    return render(request, 'pages/home.html', context)


def feed(request):
    posts = FaceboopPost.objects.all()
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request:
        form = PostForm(request.POST)

        # check whether it's valid:
        if form.is_valid():
            # Challenge 3: TODO - Uncomment the code then complete it to
            # successfully save new "wall posts"
            the_username = form.cleaned_data['username']
            the_text = form.cleaned_data['text']
            print('username', the_username)
            print('...says: ', the_text)
            FaceboopPost.objects.create(
                username=the_username,
                text=the_text
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
    # Bonus Challenge: TODO - Make this view work! (Also add in
    # search.html page)
    return render(request, 'pages/search.html', context)
