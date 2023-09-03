from django.shortcuts import render

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
    # Bonus Challenge 2: Here we check for the extra sorting features in the
    # request.GET.
    if 'sort_by' in request.GET:
        dict_key = request.GET['sort_by']
        # Nice feature of Python lists: We can use this syntax to specify which
        # property we want to sort by when sorting
        shibas.sort(key=lambda shiba: shiba[dict_key])

    # Bonus challenge 1:
    if 'reverse' in request.GET:
        # Reverse the list if specified
        shibas.reverse()

    # This constructs the "template context dictionary" -- the dictionary that
    # contains the "template variable" data that we can render into the
    # template
    context = {
        'shiba_count': len(shibas),
        'all_shibas': shibas,
    }


    # "homepage.html" tells Django to look for the template in
    # `templates/homepage.html'
    return render(request, 'homepage.html', context)


def adopt_dog(request):
    context = {}  # No need for context on this page

    if 'number' in request.GET:
        number = int(request.GET['number'])
        print('They entered:', number)

        for shiba in shibas:
            if shiba['id_number'] == number:
                print('found shiba, removing!')
                shibas.remove(shiba)

    # "adoption.html" tells Django to look for the template in
    # `templates/adoption.html'
    return render(request, 'adoption.html', context)





def add_dog(request):
    context = {}  # No need for context on this page

    if 'name' in request.GET:
        age = int(request.GET['age'])
        name = request.GET['name']
        print('They entered:', name)

        id_number = len(shibas)

        # Add a new shiba, make it a taco shiba
        shibas.append({
            'age': age,
            'name': name,
            'id_number': id_number,
            'image_src': 'https://i.imgur.com/VEslUBl.png',
        })
        # Challenge: this scheme for getting ID number has a bug in certain
        # circumstances where more than one dog will get the same ID number.
        # Can you figure it out?


    # "add_dog.html" tells Django to look for the template in
    # `templates/add_dog.html'
    return render(request, 'add_dog.html', context)

