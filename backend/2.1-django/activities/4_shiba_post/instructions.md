Challenge 1:
-------------------

1. Get this code running! This time feel free to reuse the previous
virtualenv shell.

2. Once you get it running, look at the templates. They've changed a bit.
Do you see the "extends" and "base.html"? Can you explain in your own
words what you think this does to the person next to you?
>> extends would just pipe in a template into this template? basically says, at the end of the base.html, add the below!

3. Do the thing you do with new projects: Add a print to every single
view, to better explore and understand the code.

(Answer 2: This allows templates to be more DRY, to include common code in a
single base.html template, and then only replace parts of it elsewhere.)


Challenge 2:
-------------------

1. What happens if you Add a Shiba, and then hit refresh?
>> it keeps submitting request, which keeps adding shibas!!
2. Try this a few times. Establish a correlation of what is happening.
3. Why is this happening, and how do you fix the duplicates?
>> maybe I could scan for duplicates each render, and de-duplicate?
>>> POST request would be better!

Answer: The "GET" method allows refresh. This means that views that change or
add data will get re-run. It is not suitable for forms, or at least forms that
change or add data. The "POST" prevents refresh. It is better for forms.

4. Change the "Add a Shiba" page to use POST instead of GET. This will require
a change in both the template file, and a couple changes in the views.py file.

HINT #1: Look for places in `views.py` and the `add_dog.html` that say "GET",
and change those to "POST".

HINT #2: You will also need to add a "CSRF Token" to your form. This adds
security measures that Django requires to prevent forged POST requests, and
Django prohibits POST forms without these. Add the following code anywhere in
the form tag:


        {% csrf_token %}




Challenge 3:
-------------------

Rinse and repeat! Change the "Remove a Dog Page" to use POST instead of GET.
This will require a change in both the template file, and a couple changes in
the views.py file.



Challenge 4:
-------------------

Currently, its tedious to adopt dogs on a separate page. You should be able
just to click a button next to each dog. Implement this functionality, so that
there exists a button next to each dog that will adopt that dog, without the
need to go to a new page.

HINT 1: This will require a form IN THE FOR LOOP, so it generates a new form
with a new button for every single loop in the page.

HINT 2: Think about pre-filled in fields. Also, try out "hidden" fields:

        <input value="12" name="id_number" type="hidden" />





Challenge 5:
-------------------

Currently, a bug exists where there can be more than one dog with the
same ID number. Can you reproduce this bug? Can you fix this bug?

HINT: Consider generating a random number as the ID instead.
# Random only partly fixes >> there's still a chance it hits, partly because the init dict is cardinal

Bonus Challenges:
-------------------

Try one or both of the following:

- Add a new feature to the adoption page: Have it say if the previous adoption
  attempt was successful or not.
    - Hint 1: Successful adoptions meaning that the dog was found and removed
      from the list, and unsuccessful adoptions meaning the dog was not found.
    - Hint 2: Create a new context variable which stores if the dog was found
      in the list or not (e.g. `context["was_adopted"]`) and then check for
      that in the template to conditionally show an error message (e.g.
      `{% if was_adopted %}`).


- Add a "redirection" feature to the adoption view. If the adoption was
  "requested" (via the form) from the homepage, have it "redirect" back to the
  homepage, instead of being displayed on the same page.
    - Hint 1: "Redirect" is a special HTTP response (in the 300s range), that
      tells the browser to go to a new location
    - Hint 2: To do a redirect in Django, see this code as a reference:

            # At the top...
            from django.shortcuts import render, redirect

            # Somewhere in a view...
            return redirect('/') # (replace '/' with any path)



Extra Challenges
-------------------

*No solution provided for these since they interfere with previous challenges.*

- If you implemented the redirection feature, then there is no way to show the
  error on the homepage with just a context variable change. How can this be
  fixed? One way is with Django's messages framework. Do some Googling about
  `django.contrib.messages` and see if you can successfully add that to the
  project in order to show messages after a redirect. We'll see this feature
  more in the future.

- Google "include Django templatetag". Use it to share bits of HTML and
  templating between pages, and get the dogs list showing on the other pages,
  also.

- Research more on template extension. Can you add more sections ("blocks")
  other than just "{% block content %}"?

