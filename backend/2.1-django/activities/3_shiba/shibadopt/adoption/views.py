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

print("Hi KSC")


def homepage(request):
    print("Hi Michael")
    context = {
        'shiba_count': len(shibas),
        'all_shibas': shibas,
    }
    return render(request, 'homepage.html', context)


""" def reverse(request):
    print("Reversing shit")

    shibas.reverse()
    context = {
        'shiba_count': len(shibas),
        'all_shibas': shibas,
    }
    return render(request, 'add_a_shiba.html', context)
 """


def adoption(request):
    if 'number' in request.GET:
        number = int(request.GET['number'])
        prev_size_of_shibas = len(shibas)
        for shiba in shibas:
            if shiba["id_number"] == number:
                shibas.remove(shiba)
        if prev_size_of_shibas > len(shibas):
            print("Shiba successfully removed!")
        else:
            print("No shiba with that id.... try again?")
        print('They entered:', number)

    print("Doing adoption")
    context = {
        'shiba_count': len(shibas),
        'all_shibas': shibas,
    }
    return render(request, 'adoption.html', context)


def add_a_shiba(request):
    if 'name' in request.GET and 'age' in request.GET:
        name = request.GET['name']
        age = request.GET['age']
        next_id = shibas[-1]["id_number"] + 1
        shibas.append({
            "name": name,
            "age": age,
            "id_number": next_id
        })
        print('They added:', name)
    if 'reverse' in request.GET:
        shibas.reverse()
        print("reversing the list...")
    print("Another fucker to adopt!")
    context = {
        'shiba_count': len(shibas),
        'all_shibas': shibas,
    }
    return render(request, 'add_a_shiba.html', context)
