from django.shortcuts import render, redirect
from django import forms

from .models import WallPost


class NewPostForm(forms.Form):
    username = forms.CharField(max_length=30)
    text = forms.CharField(widget=forms.Textarea())


def homepage(request):
    # READ
    posts = WallPost.objects.all()
    if request.method == 'POST':
        form = NewPostForm(request.POST)
        if form.is_valid():
            uname = form.cleaned_data['username']
            post = form.cleaned_data['text']
            WallPost.objects.create(
                username=uname,
                text=post
            )
            return redirect('/')
    else:
        form = NewPostForm()
    context = {
        'posts': posts,
        'form': form
    }
    return render(request, 'pages/home.html', context)
