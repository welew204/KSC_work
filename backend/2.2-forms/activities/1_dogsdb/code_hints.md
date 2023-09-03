Challenge 5 Code Hints
-----------------------

        # First, check if they have submitted something:
        if 'dogname' in request.POST:

            # Then, get the name out of the POST dictionary
            name = request.POST['dogname']

            # Finally, actually create the appointment
            DogAppointment.objects.create(
                image_src="http://cdn.shibe.online/shibes/1fc9a53355b767a146fa7e6188c88ee557e77659.jpg",
                name=name,
                age=5,
                date="Tomorrow",
                time="Early in the morning",
            )

