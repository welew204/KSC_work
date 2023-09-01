import requests
from django.http import HttpResponse
from django.shortcuts import render
from pprint import pprint

# This file contains the "view functions". The typical goal of a view function
# is to show HTML, typically by rendering a template file, possibly combined
# with data from an API and/or a database (a concept we haven't gotten to yet).


def index(request):
    # This "view function" is similar to ones we seen before. It's a little
    # clunky, since it still has the HTML embedded in the Python file (which is
    # hard to manage). We shouldn't make view functions like this any more!
    print("whuddup playa")
    return HttpResponse('''
        <h1>Welcome to my home page!</h1>
        <a href="/about-me">About me</a> <br />
        <a href="/github-api-example">See my GitHub contributions</a> <br />
        <a href="/newstuff">My newest stuff (under construction!)</a> <br />
    ''')


def about_me(request):
    # Django comes with a "shortcut" function called "render", that lets us
    # read in HTML template files in separate directories to keep our code
    # better organized. This is the typical look of "view functions".

    # The template files all go in the "templates" directory, just like we have
    # been doing in homework.

    # The template render context is in a separate dictionary that is passed to
    # the "render" function, as such.
    context = {
        'name': 'Wilson Belill',
        'favorite_thing': 'trumpet',
    }
    return render(request, 'about_me.html', context)


def newstuff(request):
    # Django comes with a "shortcut" function called "render", that lets us
    # read in HTML template files in separate directories to keep our code
    # better organized. This is the typical look of "view functions".

    # The template files all go in the "templates" directory, just like we have
    # been doing in homework.

    # The template render context is in a separate dictionary that is passed to
    # the "render" function, as such.
    context = {
        'name': 'Wilson Belill',
        'favorite_thing': 'trumpet',
    }
    return render(request, 'new_stuff.html', context)


def github_api_example(request):
    # We can also combine Django with APIs. This code does an API request, and
    # then renders the HTML template with the response, every time we visit
    # this view.
    response = requests.get('https://api.github.com/users/welew204/repos')
    repos = response.json()
    # pprint(repos)
    context = {
        'github_repos': repos,
    }
    return render(request, 'github.html', context)
