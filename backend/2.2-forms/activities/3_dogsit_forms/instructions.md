Challenge 1:
-------------------

1. Get this code running. Use the same steps as before.

2. Also as before, examine the code. Can you understand how the different parts
of the code are working?


Challenge 2:
-------------------

1. Examine the SitterForm. Also look at the code that uses it (the `add_sitter`
view), and the sitter model (found in `models.py`).

2. See how it is lacking several fields

Finish the code in the Sitter form to accept all fields.
# DONE


Challenge 3:
-------------------

Now it's time to upgrade the Dog Appointment form to use Django forms!

- Challenge 3 & 4 involves upgrading Dog Appointments to use Django Forms. This
  involves creating a new "AppointmentForm", and using it in both the view and
  in the template.

- Create a form class for the "add dog appointment" page (the add_dog view).
  For now, just use the form to *render the HTML code* (not to validate it,
  just yet). Here is some clue code:


        from django import forms

        class AppointmentForm(forms.Form):
            # Add in more...
            name = forms.CharField(label='Name', required=True)

- In your view, you then should create an instance of this form and include it
  in the context, as such:

        form = AppointmentForm()
        context = {
            'form': form,
        }

- Finally, in your template, you should include the form with code something
  like:

        {{ form.as_p }}


- Hint 1: Look at the existing code for the Sitter form.

- Hint 2: Take a look at the DMV example in demos, also, for more tips.

- Hint 3: Ignore the `booked` and `booked_by` fields for now (those come into
  play with the advanced challenges)


Challenge 4:
-------------------

Now, modify your view to use the form to validate and retrieve the data
that the user sent back in the POST request from the front-end.

Hint 1: You should follow similar pattern as SitterForm

Hint 2: The cheatsheet for this module has a big code snippet for this!

Hint 3: Also, there's good online documentation, notably here:
https://docs.djangoproject.com/en/2.0/topics/forms/#building-a-form-in-django

Hint 4: Take a look at the DMV example in demos, also, for more tips.



Advanced Challenge 1:
----------------------

Can you make a "booking" feature that allows you to mark Dog Appointments as
being booked or not by a particular sitter? This requires no models (database)
changes, but many changes in `views.py` and `templates/`.

- Each dog appointment has a drop-down listing the sitters to book that dog
  appointment for that sitter

- Hint #1: You will have to render multiple form instances on one page.

- Hint #2: See `booked` and `booked_by` fields


Advanced Challenge 2:
----------------------

Separate the dogs by "booked" and "unbooked" on the homepage.

Hint: Look at the "regroup" templatetag feature of Django templates.

