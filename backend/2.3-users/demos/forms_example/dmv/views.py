from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django import forms

from .models import Registration

class RegistrationForm(forms.Form):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    street_address = forms.CharField(widget=forms.Textarea)
    email = forms.EmailField(required=False)
    visit_date = forms.DateField(widget=forms.SelectDateWidget)


def registration(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = RegistrationForm(request.POST)
        # check whether it's valid:
        if form.is_valid():

            # The form is valid, and the data is in cleaned_data, lets create a
            # new database object based on this data
            Registration.objects.create(
                first_name= form.cleaned_data['first_name'],
                last_name= form.cleaned_data['last_name'],
                street_address= form.cleaned_data['street_address'],
                email= form.cleaned_data['email'],
                visit_date= form.cleaned_data['visit_date'],
            )
            messages.warning(request, "Thanks for registering")
            return redirect('/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = RegistrationForm()

    context = {
        'form': form,
    }

    return render(request, 'registration.html', context)


def employees_only(request):

    # Check if the user is logged in.
    if not request.user.is_authenticated:

        # Use Django's built-in "messages" system to us send the user a message
        # that appears on whatever next page they visit (but goes away when
        # they go to a new page)
        messages.warning(request, "You need to log in to view Employee's Only")
        return redirect('/')

    all_users = User.objects.all()
    registrations = Registration.objects.all()
    context = {
        'users': all_users,
        'registrations': registrations,
    }

    return render(request, 'employees_only.html', context)




