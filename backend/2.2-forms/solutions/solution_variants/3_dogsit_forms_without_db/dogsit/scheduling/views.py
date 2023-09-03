from django.shortcuts import render, redirect
from django import forms

import random

from scheduling import test_data

sitters = []

dogs = []


# Challenge 2-5: Here we specify the different forms to have the required
# fields. We added in an "email" form, too, since it's so easy.
class AppointmentForm(forms.Form):
    name = forms.CharField(max_length=100)
    breed = forms.CharField(max_length=100)
    notes = forms.CharField(label='Special notes', widget=forms.Textarea)
    date = forms.DateField(widget=forms.SelectDateWidget)
    start_time = forms.TimeField()
    duration = forms.DurationField()
    age = forms.IntegerField()

class SitterForm(forms.Form):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    address = forms.CharField(widget=forms.Textarea)
    phone = forms.CharField(max_length=100)
    email = forms.EmailField(required=False)
    age = forms.IntegerField()


# Add in the test sitter data we have in test_data
sitters.extend(test_data.sitters)

class BookAppointmentForm(forms.Form):
    sitter = forms.ChoiceField(
        # Advanced Challenge:
        # Here we use a type of list comprehension syntax (specifically,
        # "generator" syntax) to generate the choices for the drop-down
        choices=(
            (index, "%s %s" % (sitter['first_name'], sitter['last_name']))
            for index, sitter in enumerate(sitters)
        ),
    )


def homepage(request):
    context = {
        'sitters': sitters,
        'dogs': dogs,
        'booking_form': BookAppointmentForm(),
    }

    # For advanced challenges:
    # Lets add an "id" to all dogs so we can reference them more easily.
    # Enumerate lets us loop through a list, while keeping track of a number of
    # the index of each list item.
    for index, dog in enumerate(dogs):
        dog['id'] = index

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

    # Check if we are getting a post request, that means we are receiving a
    # form submission
    if request.method == 'POST':

        # create a form instance and populate it with data from the request:
        form = SitterForm(request.POST)

        # check whether it's valid:
        if form.is_valid():
            form.cleaned_data['picture'] = "http://placehold.it/150x150"

            # the data is in cleaned_data, lets add it to our list
            sitters.append(form.cleaned_data)

            # Redirect to homepage to see result
            return redirect('/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = SitterForm()

    context = {
        'form': form,
    }
    return render(request, 'list_sitter.html', context)




def list_dog(request):
    # Check if we are getting a post request, that means we are receiving a
    # form submission
    if request.method == 'POST':

        # create a form instance and populate it with data from the request:
        form = AppointmentForm(request.POST)

        # check whether it's valid:
        if form.is_valid():
            # Randomly select a dog image
            form.cleaned_data['picture'] = random.choice(test_data.dog_images)

            # the data is in cleaned_data, lets add it to our list
            dogs.append(form.cleaned_data)

            # Redirect to homepage to see result
            return redirect('/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = AppointmentForm()

    context = {
        'form': form,
    }

    return render(request, 'list_dog.html', context)

