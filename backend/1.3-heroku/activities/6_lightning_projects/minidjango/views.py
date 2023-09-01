import requests
from django.http import HttpResponse
from django.shortcuts import render
from pprint import pprint


def index(request):
    # This is similar to ones we have done before. Instead of keeping
    # the HTML / template in a separate directory, we just reply with
    # the HTML embedded here.
    return HttpResponse('''
        <h1>Welcome to my recipe app!</h1>
        <a href="/recipe-search/">Recipe Search</a> <br />
        <a href="/github-api-example">See my GitHub contributions</a> <br />
    ''')


secret_key = '5a62226e5dea40b4b28319188146dd6b'


def recipe_search(request):
    print(request)
    context = {'data': {}}

    if 'searchterm' in request.GET:
        query = request.GET['searchterm']
        response = requests.get(
            f'https://api.spoonacular.com/recipes/complexSearch?apiKey={secret_key}&query={query}')
        # Django comes with a "shortcut" function called "render", that
        # lets us read in HTML template files in separate directories to
        # keep our code better organized.
        data = response.json()
        context['data'] = data
    # pprint(data)

    return render(request, 'recipes_template.html', context)


def github_api_example(request):
    # We can also combine Django with APIs
    response = requests.get('https://api.github.com/users/janeqhacker/repos')
    repos = response.json()
    context = {
        'github_repos': repos,
    }
    return render(request, 'github.html', context)
