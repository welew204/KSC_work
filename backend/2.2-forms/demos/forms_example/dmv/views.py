from django.shortcuts import render, redirect
from django import forms

from .models import DriverRegistration

class RegistrationForm(forms.Form):
    first_name = forms.CharField(max_length=100)
    middle_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    reason_for_visit = forms.ChoiceField(
        choices=[
            ('renewal', 'License renewal'),
            ('apply', 'License application'),
            ('resume', 'Resume application'),
            ('sid', 'State ID'),
        ],
    )
    street_address = forms.CharField(widget=forms.Textarea)
    email = forms.EmailField(required=False)
    visit_date = forms.DateField(widget=forms.SelectDateWidget)

    # Here's how we might support file uploads:
    # uploaded_image = forms.FileField(required=False)


def registration(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = RegistrationForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # Get the data out of "cleaned_data" and put it in variables
            entered_first_name = form.cleaned_data['first_name']
            entered_middle_name = form.cleaned_data['middle_name']
            entered_last_name = form.cleaned_data['last_name']
            entered_reason_for_visit = form.cleaned_data['reason_for_visit']
            entered_street_address = form.cleaned_data['street_address']
            entered_email = form.cleaned_data['email']
            entered_visit_date = form.cleaned_data['visit_date']

            # Use these variables to create a new DriverRegistration object
            # (row) in our database
            DriverRegistration.objects.create(
                first_name=entered_first_name,
                middle_name=entered_middle_name,
                last_name=entered_last_name,
                reason_for_visit=entered_reason_for_visit,
                street_address=entered_street_address,
                email=entered_email,
                visit_date=entered_visit_date,
            )

            # Make the browser "refresh" (redirect back to where we are, '/')
            return redirect('/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = RegistrationForm()

    registrations = DriverRegistration.objects.all()
    context = {
        'form': form,
        'registrations': registrations,
    }

    return render(request, 'registration.html', context)

