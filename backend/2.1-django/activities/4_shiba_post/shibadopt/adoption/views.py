from django.shortcuts import render
from pprint import pprint
import random

shibas = [
    {
        'image_src': 'https://i.imgur.com/VEslUBl.png',
        'name': 'Tacopup',
        'age': 2,
        'id_number': 1,
    },
    {
        'image_src': 'https://i.imgur.com/iCCNZZF.jpg',
        'name': 'Pupperwave',
        'age': 3,
        'id_number': 2,
    },
    {
        'image_src': 'https://i.imgur.com/XiznnoN.jpg',
        'name': 'Wow-Banana',
        'age': 5,
        'id_number': 3,
    },
    {
        'image_src': 'https://i.imgur.com/ORizDRq.png',
        'name': 'Galaxy-Doggo',
        'age': 2,
        'id_number': 4,
    },
    {
        'image_src': 'https://i.imgur.com/APMdtxs.png',
        'name': 'Sweetdoggo',
        'age': 4,
        'id_number': 5,
    },
]


def homepage(request):
    # This constructs the "template context dictionary" -- the dictionary that
    # contains the "template variable" data that we can render into the
    # template
    print("sup homey")
    if 'number' in request.POST:
        number = int(request.POST['number'])
        print('They entered:', number)

        for shiba in shibas:
            if shiba['id_number'] == number:
                print('found shiba, removing!')
                shibas.remove(shiba)
    context = {
        'shiba_count': len(shibas),
        'all_shibas': shibas,
    }
    pprint(shibas)

    # "homepage.html" tells Django to look for the template in
    # `templates/homepage.html'
    return render(request, 'homepage.html', context)


def adopt_dog(request):
    print("adopt a homey")
    context = {}  # No need for context on this page

    if 'number' in request.POST:
        number = int(request.POST['number'])
        print('They entered:', number)

        for shiba in shibas:
            if shiba['id_number'] == number:
                print('found shiba, removing!')
                shibas.remove(shiba)

    # "adoption.html" tells Django to look for the template in
    # `templates/adoption.html'
    return render(request, 'adoption.html', context)


def add_dog(request):
    print("ADD a homey")
    context = {}  # No need for context on this page
    # print(request.POST)
    if 'name' in request.POST:
        age = int(request.POST['age'])
        name = request.POST['name']
        print('They entered:', name)

        id_number = random.randint(20, 3000)

        # Add a new shiba, use the taco shiba image for now
        shibas.append({
            'age': age,
            'name': name,
            'id_number': id_number,
            'image_src': 'https://i.imgur.com/VEslUBl.png',
        })

    # "add_dog.html" tells Django to look for the template in
    # `templates/add_dog.html'
    return render(request, 'add_dog.html', context)
