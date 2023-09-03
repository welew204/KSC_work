This is primarily a discussion activity. Get the code running, and analyze and
investigate the code in your own words. Only when you feel comfortable with the
existing code, go on to the Challenge 3 and beyond.

As before, do one challenge at a time!


Challenge 1:
-------------------

Get this code running. Refer to the steps from previous activities if you get
stuck. Remember to run all your commands in a terminal opened to the same
directory as the manage.py file.

Generally, it requires three steps:

        pipenv --python 3
        pipenv shell
        pipenv install django

Then finally:

        python manage.py runserver



Challenge 2:
-------------------

In your own words, answer the following concepts (out-loud!):

1. In this activity, what is the name of the "app" and what is the "project"?
>> the 'app' is "scheduling" that has views, models, templates, etc (and it's listed in 'apps.py' found in it's own filespace)
>> the 'project' is 'dogsit' in that that's the whole structure, which has an internal directory of urls, settings and wsgi file (server)

2. Look at how the template files relate to each other. Can you explain how
base.html works, and how the other template files relate to it?
>> base.html is a frame template in that it has a 'block' section that will be filled by homepage.html or add_dog.html

3. Look at models.py. Models are what defines what columns are available in our
database. Open up the db.sqlite3 database file using the SQLite DB Viewer. Do
you see the correspondence?
>> DogAppointment table, with columns for image_src, name, time, date, age 
>> confirmed in DB viewer

4. Go to the "add dog page". Check the database file. Do you see the
correlation?
>> yep, 2 new dogs (tho identical details)

5. Remember: When you visit a URL that routes to (corresponds to) a view
function, it will invoke that view function running all code within it.  With
this in mind, can you explain how visiting the "add dog page" adds a dog?
>> creates new instance of the DogAppointment class w/ .object.create({the guts})


Challenge 3:
-------------------

To get more used to both using models and views, write a new view that is an
alternate link, for adding a dog with the name "Bad Boye".

Hint #1: This requires adding a new view, which involves adding code in urls.py
AND views.py

Hint #2: Feel free to re-use or copy the `add_dog` template.
# done

Challenge 4:
-------------------

Now it's time to allow the user to select the name.

1. Create a new view function for creating a "custom dog", copied from previous
view functions. Keep it empty for now, except for the "return render" part at
the end, and an empty context dictionary (e.g. context = {}).

2. HINT: Remember the 3 steps for adding a new page:
    - Add new view function
    - Add view function to urls.py
    - Create new template
    - Possibly: Add an `<a href="...">` style link to a page somewhere to make
      it possible to get to your new view function

3. Add into the new template the following code:

        <form action="." method="POST">
            {% csrf_token %}
            <input name="dogname" placeholder="The Dog's Name" />
            <button>Submit</button>
        </form>

4. In the view function, add in the following code:

        print(request.POST)


Challenge 5:
-------------------

Time to finish up the dog adding feature!

- Examine the output of what gets printed in Challenge 4

- Can you figure out how to add code to finish this view so that you can make
  custom dogs?

- This is tricky, so if/when you get stuck, check out the hint that's found in
  `code_hints.md`



Bonus Challenge:
-------------------

You've created code to add a dog, but it doesn't let you customize every
property of each dog that gets added. It's still very basic. For a bonus
challenge, finish code in the HTML file and the view-function to allow adding
dogs with ALL properties being customized.

