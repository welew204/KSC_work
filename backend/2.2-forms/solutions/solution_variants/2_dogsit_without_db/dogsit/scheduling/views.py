from django.shortcuts import render, redirect

import random

from scheduling import test_data

sitters = []

dogs = []


# Add in the test sitter data we have in test_data
sitters.extend(test_data.sitters)

def homepage(request):
    context = {
        'sitters': sitters,
        'dogs': dogs,
    }
    return render(request, 'homepage.html', context)


def book(request):

    # Get the GET value of the dog we want to book, and convert that to an
    # actual number (instead of a string containing the digits of the number)
    dog_index_string = request.GET['dog']
    dog_index_int = int(dog_index_string)
    dog = dogs[dog_index_int]
    print('found dog:', dog)

    # Create a context with available sitters and the dog we want to book)
    context = {
        'sitters': sitters,
        'dog': dog,
    }

    # If they submitted the form then we should register the dog as being
    # booked, and that the specified sitter is the one who booked it, then
    # return to the homepage
    if request.method == 'POST':
        sitter = request.POST['sitter']
        dog['booked'] = True
        dog['booked_sitter'] = sitter
        return redirect('/')

    # Finally, render the appointment confirmation page
    return render(request, 'confirm_appointment.html', context)



def list_sitter(request):
    context = {}

    # Check if we are getting a post request, that means we are receiving a
    # form submission
    if request.method == 'POST':
        # Let's get all the values out of the POST dictionary
        age = request.POST['age']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        phone = request.POST['phone']
        address = request.POST['address']

        # For now, just use test-data photos
        picture = "http://placehold.it/150x150"

        # Now, we should append a new dictionary for this sitter being listed
        sitters.append({
            'age': age,
            'first_name': first_name,
            'last_name': last_name,
            'phone': phone,
            'address': address,
            'picture': picture,
        })

        # Redirect to homepage to see result
        return redirect('/')


    return render(request, 'list_sitter.html', context)




def list_dog(request):

    # Let's start with "no error", but then if something wasn't filled out
    # right, we'll have to add it in here
    context = {
        'error': None,
    }

    # Check if we are getting a post request, that means we are receiving a
    # form submission
    if request.method == 'POST':
        # Let's get all the values out of the POST dictionary
        age = request.POST['age']
        name = request.POST['name']
        breed = request.POST['breed']
        notes = request.POST['notes']
        date = request.POST['date']
        start_time = request.POST['start_time']
        duration = request.POST['duration']

        # Check that date is just '-' and numbers
        if '-' not in date and not date.replace('-', '').isnumeric():
            context['error'] = 'Date looks invalid'

        # Check that start_time is just '-' and numbers
        if ':' not in start_time and not start_time.replace(':', '').isnumeric():
            context['error'] = 'Start time looks invalid'

        # Let's check if duration is also like start time
        if ':' not in duration and not duration.replace(':', '').isnumeric():
            context['error'] = 'Duration looks invalid'

        if not context['error']:
            # Okay, it was successful, let's add the dog to the list, and then
            # redirect the user back to the homepage

            # Randomly select a dog image
            picture = random.choice(test_data.dog_images)

            # Append a new dictionary for this dog being listed
            dogs.append({
                'age': age,
                'name': name,
                'picture': picture,
                'breed': breed,
                'notes': notes,
                'date': date,
                'start_time': start_time,
                'duration': duration,
            })

            return redirect('/')

    return render(request, 'list_dog.html', context)

