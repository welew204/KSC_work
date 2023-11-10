from django.shortcuts import render

# Two example views. Change or delete as necessary.
def home(request):

    context = {
        'example_context_variable': 'Change me.',
    }

    return render(request, 'pages/home.html', context)

def about(request):
    context = {
    }

    return render(request, 'pages/about.html', context)

# Challenge 4
from django.http import HttpResponse
def react_app(request):
    index_html = open('./frontend/build/index.html').read()
    return HttpResponse(index_html)


# Challenge 5
from django.http import JsonResponse
def example_api_view(request):
    return JsonResponse({
        'testing': 'Does this work?',
    })

