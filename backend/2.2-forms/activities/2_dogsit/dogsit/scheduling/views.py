from django.shortcuts import render
from django import forms

# Bring in the DogAppointment model and the Sitter model from the models file
from .models import (
    DogAppointment,
    Sitter,
)


def homepage(request):
    # Show all dogs on the homepage
    dogs = DogAppointment.objects.all()
    sitters = Sitter.objects.all()
    context = {
        'dogs': dogs,
        'sitters': sitters,
    }
    return render(request, 'homepage.html', context)


def add_dog(request):
    context = {}

    # First, check if they have submitted something:
    if 'dogname' in request.POST:

        # Then, get the data out of the POST dictionary
        name = request.POST['dogname']
        age = request.POST['age']
        time = request.POST['time']
        date = request.POST['date']

        # Finally, actually create the appointment
        DogAppointment.objects.create(
            name=name,
            age=age,
            date=date,
            time=time,
        )

    return render(request, 'add_dog.html', context)


class SitterForm(forms.Form):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    phone = forms.CharField(max_length=20)
    street_address = forms.CharField(widget=forms.Textarea)
    email = forms.EmailField()


def add_sitter(request):

    # First, check if the method is POST, that is, they have done a POST form
    # submit (slightly better method than above since it's more generalized)
    if request.method == 'POST':
        form = SitterForm(request.POST)

        if form.is_valid():
            entered_first_name = form.cleaned_data["first_name"]
            entered_last_name = form.cleaned_data["last_name"]
            entered_email = form.cleaned_data["email"]
            entered_phone = form.cleaned_data["phone"]
            entered_address = form.cleaned_data["street_address"]

        # Finally, actually create the Sitter
            Sitter.objects.create(
                first_name=entered_first_name,
                last_name=entered_last_name,
                email=entered_email,
                phone=entered_phone,
                address=entered_address
            )
    else:
        form = SitterForm()
    context = {"form": form}

    return render(request, 'add_sitter.html', context)
