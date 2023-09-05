from django.shortcuts import render, redirect

from .models import WallPost

def homepage(request):

    context = {
    }
    return render(request, 'pages/home.html', context)

