from django.shortcuts import render, redirect
from django import forms

# Bring in the DogAppointment model and the Sitter model from the models file
from .models import (
    DogAppointment,
    Sitter,
)

class SitterForm(forms.Form):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    email = forms.EmailField(max_length=127)
    phone = forms.CharField(max_length=127)
    address = forms.CharField(max_length=127)

class AppointmentForm(forms.Form):
    name = forms.CharField(max_length=100)
    age = forms.IntegerField()
    time = forms.TimeField()
    date = forms.DateField()

class BookAppointmentForm(forms.Form):
    sitter = forms.ModelChoiceField(queryset=Sitter.objects.all())

def homepage(request):
    sitters = Sitter.objects.all()
    dogs = DogAppointment.objects.all()
    context = {
        'sitters': sitters,
        'dogs': dogs,
        'booking_form': BookAppointmentForm(),
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
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            address = form.cleaned_data['address']

            # Finally, actually create the Sitter
            Sitter.objects.create(
                first_name=first_name,
                last_name=last_name,
                email=email,
                phone=phone,
                address=address,
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
    # Check if we are getting a post request, that means we are receiving a
    # form submission
    if request.method == 'POST':
        # Let's get all the values out of the POST dictionary
        form = AppointmentForm(request.POST)
        if form.is_valid():
            # Then, get the data out of the POST dictionary
            name = form.cleaned_data['name']
            age = form.cleaned_data['age']
            time = form.cleaned_data['time']
            date = form.cleaned_data['date']

            # Finally, actually create the appointment
            DogAppointment.objects.create(
                name=name,
                age=age,
                date=str(date),
                time=str(time),
            )

            # Redirect to homepage to see result
            return redirect('/')
    else:
        form = AppointmentForm()

    context = {
        'form': form,
    }

    return render(request, 'add_dog.html', context)

def book(request):
    form = BookAppointmentForm(request.POST)
    if form.is_valid():
        # Get the id they specified
        dog_id = request.POST['id']

        # Fetch the corresponding appointment
        dog_appt = DogAppointment.objects.get(id=dog_id)

        # Mark it as booked
        dog_appt.booked = True

        # Get who they booked it with
        sitter = form.cleaned_data['sitter']
        sitter_name = sitter.first_name

        # Store that info too
        dog_appt.booked_by = sitter_name

        # And save
        dog_appt.save()
    return redirect('/')
