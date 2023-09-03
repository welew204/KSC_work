As before, do one challenge at a time. For the challenges here, there are
further hints as comments in the source-code itself.

Challenge 1:
-------------------

1. As before, get a virtualenv ready, as you did with previous activities.
(Alternatively, for the sake of time, it's okay to re-use your an old one.)

2. This time, we want to pay attention to the warning about migrations. Run the
following command to "migrate" and set-up and configure the empty database:

        python manage.py migrate

3. Create a new Django Superuser (administrator account). Remember the name /
password you used. Use the following command:

        python manage.py createsuperuser




Challenge 2:
-------------------

1. Now, get the web server running, as before:

        python manage.py runserver

2. Using your web browser and the built-in admin panel, login using the user
you just made in Challenge 1:

        http://localhost:8000/admin/

3. Once logged into the admin panel, create several users using the graphical
interface. It doesn't matter what you are adding to them, the goal is to get
used to using the admin interface to make users.



Challenge 3:
-------------------

Now that you have made some users, you should make them visible on the front
page.

1. There is some code that is commented out to do this in the homepage
view-function in views.py.

2. Uncomment the code, and confirm that it works to display the users on the
front-page.

3. To be neater, you should move all "import" and "from .. import" statements
to the top of the file. This is not required, but simply convention.



Challenge 4:
-------------------

Change the homepage view such that it creates a new user in the database
using the User model when you hit submit on the new user form.

- Hint: Here is how we can add a new User entry to the database. You'll have to
  modify this to get it to work with ANY data from the user:


        User.objects.create(
            username='mrbean',
            first_name='Rowan',
            last_name='Atkinson',
            password='blackadder',
            email='johnny@english.com',
        )


Bonus Challenge 1:
-------------------

Make the "Feed" page only accessible to users who are logged-in. Make it
redirect logged-out people to the homepage. You can test logging in and logging
out log-in (and log-out) using the admin panel.

Hint:

        if not request.user.is_authenticated:
            print('user not logged in blech')
            return # Do something....


More information:

<https://docs.djangoproject.com/en/3.0/topics/auth/>


Bonus Challenge 2:
-------------------

- Research the Django "messages" framework. You can also take a look at the DMV
  demo, which has this functionality.

- Can you make it so that it sends back an "error message" to the user when
  they try to access the password protected page?

More information:

<https://docs.djangoproject.com/en/3.0/ref/contrib/messages/>


Advanced Bonus Challenge
------------------------

There's a built-in system for protecting certain views. Learn about the
`@login_required` below:

<https://docs.djangoproject.com/en/3.0/topics/auth/default/#the-login-required-decorator>

Spend some time researching other various decorators:

<https://docs.djangoproject.com/en/3.0/topics/http/decorators/>
