Challenge 1:
-------------------

Get this code running! You should see a Shiba Adoption site when it is fully
working. Refer to the steps from previous activities if you get stuck.

Generally, it requires these steps:
- pipenv --python 3
- pipenv shell
- pipenv install
- python manage.py runserver

Challenge 2:
-------------------

1. Look closely at "adoption/views.py", at "shibadopt/urls.py", and at
"adoption/templates/homepage.html".  Can you explain broadly in your own words
how all these files fit together?  Which is the "project" and which is the
"app"?
>> the view function builds a context from data that is currently hard-coded in, and passes that context to a render function, which pulls a template from the /templates/homepage.html and passes in context values. This view is accessible at the url registered in urls.py (located at "")

2. What's the first thing to do with new code? (You should be yelling in your
head, "print!!!")
print()

3. Finally, add two prints:
    - One to the top of the "views.py" file
    this will only run if the views page is executed, so right when the server restarts (and imports the view.py file)
    - Another in the "homepage" view function (put it either right after the
      function definition line, and/or right before the return)
    this will run each time the function is called (by the path() call in urls.py )
    - Make sure you understand why and how you can get each of these "prints"
      to activate.




Challenge 3:
-------------------

Time to get coding! Your first goal is to fix the Shiba count on the
homepage. It currently shows a much bigger, inaccurate number.

Hint: To get the length of a list:
    count = len(name_of_list)




Challenge 4:
-------------------

Your second goal is to add a new page. It should be the "Adoption" page.  For
now, just have it say the text "To adopt a Shiba, contact us" (don't get hung
up on styling, etc).  Create the page such that the link on the homepage is
functioning.

Hint 1: Your goal here is copying & pasting what you see with the homepage, but
changing it to use a new HTML template file. This too should be copied from the
existing template file, and changed so that instead of showing the Shibas, it
shows the desired text.

Hint 2: Remember to add the route to urls.py






Challenge 5:
-------------------

Okay, now let's improve the adoption page. Try adding the following code
to your new template HTML:

    <form method="GET">
        <input name="number" />
        <button>Adopt and remove</button>
    </form>

Observe what it does. See how it modifies the URL.

Now, add the following code to your new adoption view:

    if 'number' in request.GET:
        number = int(request.GET['number'])
        print('They entered:', number)

Observe what it does. See how prints what was entered. Write in
pseudocode how you think you might use this to make the page remove a
dog from the list.

^ use int to select specific sheba
^ remove from dict
^ updated value should be reflected in template


Challenge 6:
-------------------

Implement the pseudocode you wrote for Challenge 5.

HINT: Here is some clue on how to remove an element (in this case, a
dictionary with `id_number` equal to 3) from a list:

    for shiba in shibas:
        if shiba['id_number'] == 3:
            print('found shiba, removing!')
            shibas.remove(shiba)

Once you get this working, note how even successfully deleted shibas seem
to "come back" every time the server restarts. Can you explain why in
your own words?

^ the original sheba dict is hard-coded, so each time the server reboots, the og values get used


Challenge 7:
-------------------

With this as a guide, create a "Add a Shiba" page. This page should
function like the Shiba deletion page, except it should add Shibas, and
allow the user to specify the name and age of the shiba being added.



----


Bonus Challenge:
------------------

Add a link to reverse the Shiba list. This should also use GET variables.

Advanced Bonus Challenge:
------------------

Add links that sort the Shibas by age or name. They should also use GET
variables.

