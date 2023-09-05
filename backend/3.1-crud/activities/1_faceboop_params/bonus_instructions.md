*Start with instructions.md!*

Bonus Challenge 1
------------------

Time to improve the city feature, and get practice using slugs & custom
ModelAdmins for better looking URLs!

1. Create a new model called City. This should have a `title` and `slug` fields.
`title` should be CharField type, and `slug` should be SlugField type:
    - <https://docs.djangoproject.com/en/3.0/ref/models/fields/#slugfield>

2. Make migrations & migrate

3. Register City in the Admin interface

4. Define a custom ModelAdmin to use `prepopulated_fields` to auto-generate the
slug from the title:
    - <https://docs.djangoproject.com/en/3.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.prepopulated_fields>

5. Now, using the Admin interface, add a few cities, including cities with
spaces and/or non-English characters in the title such as "San Francisco" or
"São Paulo". Note how the "slug" field gets auto-populated with a
"URL-friendly" version of the title (`san-francisco` and `sao-paulo`)



Bonus Challenge 2
-------------------

City stuff continued!

1. Modify the `view_city` view-function and corresponding path in urls.py to
accept a slug instead of the name, but display the name

2. Finally, view-function and corresponding path in urls.py to accept the slug
instead of the name, but display the name

3. Add `def get_absolute_url` to your model:
    - <https://docs.djangoproject.com/en/3.0/ref/models/instances/#get-absolute-url>
    - This is a Django convention that will allow a link to the city page from
      the model admin page
    - Use "reverse" to construct the URL for more precision and less chance of
      typos (same idea of using the `{% url %}` template tag)

4. Add to the homepage a bullet list of all the cities which links to that
cities `view_city` page

- Also, for more template practice: Can you add code to make the title of the
  web browsing tab be "[City Name] - Faceboop Cities"?



Bonus Challenge 3
-------------------

Context: For DRYer code, its possible for the same view to be referenced by
multiple URL routes in urls.py. This can be done by making view-functions that
have default parameter values.

- Modify the feed view-function so that the username is optional for the
  username URL, and defaults to the username of the current logged-in user.



Bonus Challenge 4
-------------------

For this bonus challenge, your goal is to build a log-in system using Django's
pre-written views for handling log-in and log-out.

This will involve the following steps:

1. Add in the pre-written views to your URLs.py. Add the following line:

        # Add this at the top
        from django.urls import path, include

        # ... and add the following within your urlpatterns:
        path('accounts/', include('django.contrib.auth.urls')),

2. Add in a setting to redirect successful log-ins to the homepage. This goes
at the bottom of your settings.py:

        LOGIN_REDIRECT_URL = '/'

3. Fix the form on the homepage to point to "accounts/login/" with its action.

        <form action="/accounts/login/" method="POST">

        <!-- Or, using "named" views, you can write simply: -->

        <form action="{% url 'login' %}" method="POST">

4. Try it out! You should have a successful log-in system.



This will work now for most situations, but many situations will fall-back on
Django's default, ugly look.  To style different situations with custom
templates, check out the following tutorial:

<https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication>

You'll need to include your own template. You need to put this in a directory within your
templates directory, as such:

        registration/login.html

(This is the page done in the solution)
