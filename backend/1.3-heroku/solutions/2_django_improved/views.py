import requests
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return HttpResponse('''
        <h1>Welcome to my home page!</h1>
        <a href="/about-me">About me</a> <br />
        <a href="/github-api-example">See my GitHub contributions</a> <br />
        <a href="/newstuff">My newest stuff</a> <br />
    ''')


def about_me(request):
    # Challenge 2
    context = {
        'name': 'Jane Q Hacker',
        'favorite_thing': 'Coding Django Web apps!!',
    }
    return render(request, 'about_me.html', context)


def newstuff(request):
    # Challenge 3
    context = {}
    return render(request, 'my_new_stuff.html', context)


def github_api_example(request):
    # Bonus Challenge modification goes here
    response = requests.get('https://api.github.com/users/michaelpb/repos')
    repos = response.json()
    context = {
        'github_repos': repos,
    }
    return render(request, 'github.html', context)

