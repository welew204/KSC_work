from django.shortcuts import render, redirect
from django import forms
from pprint import pprint

# Bring in the DogAppointment model and the Sitter model from the models file
from .models import (
    DogAppointment,
    Sitter,
)


class SitterForm(forms.Form):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    email = forms.EmailField()
    phone = forms.CharField(max_length=20)
    address = forms.CharField(widget=forms.Textarea)


class AppointmentForm(forms.Form):
    dog_name = forms.CharField(max_length=100)
    age = forms.CharField(max_length=100)
    appt_date = forms.DateField(widget=forms.SelectDateWidget)
    appt_time = forms.TimeField()


def homepage(request):
    sitters = Sitter.objects.all()
    dogs = DogAppointment.objects.all()
    context = {
        'sitters': sitters,
        'dogs': dogs,
    }
    return render(request, 'homepage.html', context)


def add_sitter(request):
    # Check if we are getting a post request, that means we are receiving a
    # form submission
    if request.method == 'POST':
        # Let's get all the values out of the POST dictionary
        form = SitterForm(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            # TODO: Finish this...

            # Finally, actually create the Sitter
            Sitter.objects.create(
                first_name=first_name,
                last_name=last_name,
            )

            # Redirect to homepage to see result
            return redirect('/')
    else:
        form = SitterForm()

    context = {
        'form': form,
    }

    return render(request, 'add_sitter.html', context)


def add_dog(request):
    # Let's start with "no error", but then if something wasn't filled out
    # right, we'll have to add it in here

    # Check if we are getting a post request, that means we are receiving a
    # form submission
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            pprint(form.cleaned_data)
            name = form.cleaned_data["dog_name"]
            age = form.cleaned_data["age"]
            time = form.cleaned_data["appt_time"]
            date = form.cleaned_data["appt_date"]
        # Then, get the data out of the POST dictionary

        # Finally, actually create the appointment
            DogAppointment.objects.create(
                name=name,
                age=age,
                date=date,
                time=time,
            )
    else:
        form = AppointmentForm()
    context = {
        'form': form,
        'error': None,
    }

    return render(request, 'add_dog.html', context)
