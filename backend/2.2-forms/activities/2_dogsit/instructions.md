Challenge 1:
-------------------

Get this code running.  Refer to the steps from previous activities if you get
stuck. It's okay to re-use a virtualenv that you created from a previous
environment, if you want (e.g., if you are already "in" the virtualenv, as
indicated by the parenthesis before your prompt)

Generally, it requires three steps:

    pipenv --python 3
    pipenv shell
    pipenv install django

Then finally:

    python manage.py runserver


Challenge 2:
-------------------

As with the previous activity, use this time for code understanding or code
comprehension. See if you can express in your own words what the code is doing.
Experiment with creating dog appointments and sitters.

1. Can you explain how the forms send POST requests to the server?
>> the submit button is part of a form w/ method = "POST"

2. How is data added to the database? How can you use DBViewer to see the data
getting added?
>> the add_dog view function is a adding an instance of the DogAppointment class (after making sure the form has 'dogname' in it)

Challenge 3:
-------------------

Time to get to work! Presently, when adding a sitter, you are only getting
their first name. We want to be able to add other attributes to the sitter,
also.

1. Examine the code in views.py, and the code in models.py. Can you
determine which fields are missing?

2. Follow the same pattern you see in views.py and add_sitter.html to
add support for the missing fields.

Hint: This requires adding code in views.py and add_sitter.html


Challenge 4:
-------------------

- See how you can enter in "garbage data" for the phone-number and email for
  the sitter, and time and date for the dog appointment?

- Checking the validity of data entered by users is called "form validation".

- Write in pseudocode how you might validate this data entered by the user.
* I'd do it via built-in Django forms module, and define the shape of the incoming form data (and let Django also render the form for me as {{form.as_p}})
* but if I coudn't do that, I'd do if statements for each field, then conditionally add context variables and then...

- This functionality should also report back to the user when they entered
  something incorrect in these fields, giving them a chance to fix it. (e.g.
  You entered an incorrect email! It should have an "@" symbol.)
* ... add if statements in the template to conditionally render if any fields sucked

NOTE: You can also do this at the "models" level, but let's not think about
that for now.


Challenge 5:
-------------------

Dog age is the HTML input type of "number". This prevents the user from
entering a non-number in the form. Can you figure out a way to "hack" this
protection, and send invalid ages to the backend?
>> negative ages!

Challenge 6:
-------------------

Implement the code for Challenge 4. This will require both Python and template
changes (to report back to the user when something went wrong).
>> did this using Django Forms (just for sitter)


Advanced Challenge:
-------------------

How might you write the code to allow "booking" of the dog sitting
appointments? This feature should exist as a button on each dog (each dog
representing thus one appointment timeslot). When clicked, it takes the user to
a new page, that lets them select which sitter booked for this dog. Forget
about saving this data to the database for now, just write everything except
for this.

Write the pseudocode for this feature. If you have time, start implementing
this feature.
>> (in template) for each dog add a button to a link to a new url/view
>> new template to display a form with sitters as a Choice field
>> (in views) add view function for this new page that handles the form (if request.POST, and request .is_valid()), and populates a new appointment row (instatiate a Appointment model class)

