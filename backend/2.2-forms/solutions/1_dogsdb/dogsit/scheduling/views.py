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
    context = {}
    DogAppointment.objects.create(
        image_src="http://cdn.shibe.online/shibes/1fc9a53355b767a146fa7e6188c88ee557e77659.jpg",
        name="Good Boye",
        age=5,
        date="Tomorrow",
        time="Early in the morning",
    )
    return render(request, 'add_dog.html', context)


def add_bad_dog(request):
    context = {}
    DogAppointment.objects.create(
        image_src="http://cdn.shibe.online/shibes/1fc9a53355b767a146fa7e6188c88ee557e77659.jpg",
        name="Bad Boye",
        age=5,
        date="Tomorrow",
        time="Early in the morning",
    )
    return render(request, 'add_dog.html', context)


def add_custom_dog(request):
    context = {}

    # First, check if they have submitted something:
    if 'dogname' in request.POST:

        # Then, get the name out of the POST dictionary
        name = request.POST['dogname']

        # Finally, actually create the appointment
        DogAppointment.objects.create(
            image_src="http://cdn.shibe.online/shibes/1fc9a53355b767a146fa7e6188c88ee557e77659.jpg",
            name=name,
            age=5,
            date="Tomorrow",
            time="Early in the morning",
        )

    return render(request, 'add_custom_dog.html', context)



def add_custom_dog_bonus(request):
    # Bonus Solution
    context = {}

    # First, check if they have submitted something:
    if 'dogname' in request.POST:

        # Then, get the name out of the POST dictionary
        name = request.POST['dogname']
        age = request.POST['age']
        time = request.POST['time']
        date = request.POST['date']

        # Finally, actually create the appointment
        DogAppointment.objects.create(
            image_src="http://cdn.shibe.online/shibes/1fc9a53355b767a146fa7e6188c88ee557e77659.jpg",
            name=name,
            age=age,
            date=date,
            time=time,
        )

    return render(request, 'add_custom_dog_bonus.html', context)
