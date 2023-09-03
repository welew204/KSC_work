from django.shortcuts import render

# Bring in the Dog model from the models file
from .models import DogAppointment


def homepage(request):
    # Show all dogs on the homepage
    dogs = DogAppointment.objects.all()
    context = {
        'dogs': dogs,
    }
    return render(request, 'homepage.html', context)


def add_dog(request):
    DogAppointment.objects.create(
        image_src="http://cdn.shibe.online/shibes/1fc9a53355b767a146fa7e6188c88ee557e77659.jpg",
        name="Good Boye",
        age=5,
        date="Tomorrow",
        time="Early in the morning",
    )

    # Render add_dog.html, but with no context
    context = {}
    return render(request, 'add_dog.html', context)


def add_bad_dog(request):
    DogAppointment.objects.create(
        image_src="http://cdn.shibe.online/shibes/1fc9a53355b767a146fa7e6188c88ee557e77659.jpg",
        name="Bad Boye",
        age=3,
        date="next week",
        time="afternoon",
    )

    # Render add_dog.html, but with no context
    context = {}
    return render(request, 'add_dog.html', context)


def add_custom_dog(request):
    print(request.POST)
    if len(request.POST) == 5:
        DogAppointment.objects.create(
            image_src="http://cdn.shibe.online/shibes/1fc9a53355b767a146fa7e6188c88ee557e77659.jpg",
            name=request.POST["dogname"],
            age=request.POST["age"],
            date=request.POST["appt_day"],
            time=request.POST["appt_time"],
        )
    context = {}
    return render(request, 'custom_add_dog.html', context)


def custom_dog_page(request):
    print('just displaying dog!')
    context = {}
    return render(request, 'custom_add_dog.html', context)
