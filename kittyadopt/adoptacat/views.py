from django.shortcuts import render

# Create your views here.


def adoption_homepage(request):
    context = {
        'adoptions_needed': 5,
    }
    return render(request, 'adoption_homepage.html', context)


def adoption_about(request):
    context = {}
    return render(request, 'about_adoption.html', context)
