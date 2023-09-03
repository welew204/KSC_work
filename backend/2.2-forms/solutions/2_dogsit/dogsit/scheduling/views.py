from django.shortcuts import render

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

        ##################################
        # Challenge 6
        if not age.isdigit():
            context['error_message'] = 'age not a number'
            return render(request, 'add_dog.html', context)

        # Check that date is just '-' and numbers
        if '-' not in date and not date.replace('-', '').isnumeric():
            context['error_message'] = 'Date looks invalid'
            return render(request, 'add_dog.html', context)

        # Check that time is just '-' and numbers
        if ':' not in time and not time.replace(':', '').isnumeric():
            context['error_message'] = 'Start time looks invalid'
            return render(request, 'add_dog.html', context)
        ##################################

        # Finally, actually create the appointment
        DogAppointment.objects.create(
            name=name,
            age=age,
            date=date,
            time=time,
        )

    return render(request, 'add_dog.html', context)


def add_sitter(request):
    context = {}

    # First, check if the method is POST, that is, they have done a POST form
    # submit (slightly better method than above since it's more generalized)
    if request.method == 'POST':

        # Challenge 3

        # Then, get the data out of the POST dictionary
        first_name = request.POST['firstname']
        last_name = request.POST['lastname']
        email = request.POST['email']
        phone = request.POST['phone']
        address = request.POST['address']

        ##################################
        # Challenge 6
        if '@' not in email:
            context['error_message'] = 'bad email'
            return render(request, 'add_sitter.html', context)

        if len(phone) < 9:
            context['error_message'] = 'phone number is too short'
            return render(request, 'add_sitter.html', context)

        if '-' not in phone:
            context['error_message'] = 'phone number is weird'
            return render(request, 'add_sitter.html', context)
        ##################################

        # Finally, actually create the Sitter
        Sitter.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            address=address,
        )

    return render(request, 'add_sitter.html', context)

# Challenge 4:
# Pseudo-code should be something like:
# Check if data has certain attributes.
# If it does not, report back to the user and don't save.
# If it does, then do save data



# Challenge 5:
# Use the Network tab, you can simulate requests and modify the data getting
# sent in the POST request. Moral of the story: You can NEVER trust users to
# send cornet data. Never trust the front-end!
