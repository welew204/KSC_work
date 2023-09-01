This activity is primarily focused on understanding existing code & directory
layout.

Challenge 1
-----------

Get the code working!

1. Run the following commands:


    pipenv --python 3           # Create a new virtualenv
    pipenv shell                # Enter the virtualenv
    pipenv install django       # Download Django package into virtualenv
    pipenv install requests     # Download requests package into virtualenv
    python manage.py runserver  # Run the Django Python web-server itself

2. Now, visit http://localhost:8000 or http://127.0.0.1:8000

3. What's the first thing you do with a new Python file? Add a print!

4. Examine the code. Can you explain in your own words how all the files relate to each other?
    - Hint: There are clues in the comments in the files.

The remaining challenges are all about making small changes and additions, to
ensure you understand how the code fits together.



Challenge 2
-----------

Practice changing context dictionaries:

- Modify the code to show your name and favorite thing, instead of "Arya Stark"
  and "Needle".



Challenge 3
-----------

The homepage has a broken link. Add a new page to complete the link. This
requires the following steps:

1. Create a new view function in views.py called "newstuff".
    - Consider copying from the `about_me` view function.

2. Add a new HTML page in the templates/ directory
    - Consider copying from the `about_me.html` template

3. Finally, add a new path in urls.py to point to your new view function



Challenge 4
-----------

Time to get some practice with static files! All of these changes will go into
the "static/" directory, and be referenced in the HTML code with "/static/"

1. Create a new CSS file, and include it in your new "newstuff" page. Just to
test, consider putting the following code into it:

    body {
        background: orange;
    }


2. Also practice adding an image file. Download or pick from your personal
files a JPG file of your choice, and add it using an img-tag to your new page.
  - If you don't want to spend time picking an image, consider downloading the
    following: https://i.imgur.com/dIw9Lb9.jpg




Bonus Challenge
---------------

Examine the JSON output of the GitHub API:

- https://api.github.com/users/janeqhacker/repos

- Modify the Django Python code to show the list of repos from your (or another
  person's) GitHub profile
- Modify the template to show many stars (called "stargazers") each repo has.



# More API practice: Still have time? Start the next activity!
