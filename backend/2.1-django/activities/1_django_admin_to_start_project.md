In this example, we are creating a Cat Adoption site called "kittyadopt". For
this activity, follow this guide to create a new Django project, in any
directory.


# One time setup

Install Django globally so we have access to the Django Admin commands
all the time (even outside of a "pipenv shell").

- Note: You only need to do this once. It is only for convenience so you can
  avoid using "pipenv shell" for the first step of creating the project.

Linux Users:

    sudo pip3 install django

macOS Users:

    pip3 install django



# Steps for new projects

For every project you want to create, follow these steps.

1. Use Django Admin to create a new project:

    django-admin startproject kittyadopt


2. Go into the directory and "ls", you should see "manage.py", and a
directory for global project settings "kittyadopt":

    cd kittyadopt
    ls


3. Use pipenv to create a new virtualenv for kittyadopt:

    pipenv --python 3
    pipenv shell


4. Install Django into the virtualenv for kittyadopt:

    pipenv install django

5. Ensure that we see a "rocketship" default page for Django, indicating
we've done everything correctly (Ctrl+C to stop):

    python manage.py runserver



6. Create a new "app" to start adding functionality to kittyadopt:

    django-admin startapp adoptacat


7. Tell our Django project that we are using this app by adding "adoptacat" to
the list of APPS in settings:
    * Open kittyadopt/settings.py in your preferred text editor
    * Go down to the line that says `INSTALLED_APPS` - it likely will be around
      line 33.
    * Add in 'adoptacat', as another app, just like the ones you see there
      (don't include the django.contrib parts)
    * Save the file and close it




8. Add a new view to our adoptacat app

    * Open adoptacat/views.py in your preferred text editor

    * Add the following code:


    def adoption_homepage(request):
        context = {
            'adoptions_needed': 5,
        }
        return render(request, 'adoption_homepage.html', context)


9. Create the templates directory for adoptacat

    * Create a new directory within adoptacat called "templates"


10. Create the `adoption_homepage.html` template
    * Inside of adoptacat/templates, create a new file called
      "adoption_homepage.html"

    * Inside this file, write something like:

    <h1>Kitty Adoptions!</h1>
    <h2>Currently we need {{ adoptions_needed }} adoptions.</h2>


11. Go back to your "project root" directory, that is to say, the
directory that contains "manage.py". Start the Django server:

    python manage.py runserver


12. Visit your page in the browser: localhost:8000

13. It doesn't work quite yet... **We are missing one step... Can you
guess what it is? (Scroll down to the next step if you can't).**






















14. Add the URL route for our view to urls.py:
    * Open up kittyadopt/urls.py

    * Add the following line right after "from django.urls import path":
        from adoptacat import views

    * Add the following line right before the ']'

        path('', views.adoption_homepage),


15. Now, visit the page again. You should see your HTML page you wrote
with the number of kittens added.

Bonus Challenge
----------------

- Which steps you need to repeat to add another page to your app / project?
(Answer: 8, 10, and 14)

- Repeat those steps to add another page

