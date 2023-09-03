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
    # Challenge 4: TODO Finish to include name, date joined, and email


def homepage(request):
    # Challenge 5: TODO: Use the finished NewFanPageForm to add a spot to
    # add new fan pages to the pages/home.html
    fan_pages = FaceboopFanPage.objects.all()
    context = {
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
            #the_username = form.cleaned_data['username']
            #print('username', the_username)
            #FaceboopPost.objects.create(
            #    username=the_username,
            #)
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

