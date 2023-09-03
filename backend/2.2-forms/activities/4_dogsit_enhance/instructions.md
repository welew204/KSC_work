Challenge 1: Installing Django-Bootstrap5
-------------------

Get this code running, same as before. Then, do the following to install this
3rd party package:

    pipenv install django-bootstrap5

Add to `INSTALLED_APPS` in your settings.py:

        'django_bootstrap5',

Make sure "runserver" still works without error.



Challenge 2: Using Django-Bootstrap5
-------------------

- Convert the `add_sitter` template to using the django-bootstrap5 forms
  package to render your forms.

- Hint: Below is the example code that is given to you by the documentation for
  django-bootstrap5. Follow this clue to upgrade your forms:


        {% load django_bootstrap5 %}

        <form method="POST" class="form">
            {% csrf_token %}
            {% bootstrap_form form %}
            {% buttons %}
                <button type="submit" class="btn btn-primary">Submit</button>
            {% endbuttons %}
        </form>



Challenge 3
-------------------

Repeat Challenge 2, except for the dog appointment form.



Bonus Challenge 1
-------------------

Background: Django Debug Toolbar is one of the most popular Django packages. It
adds a sort of "dev tools" like interface for Django apps, showing you the
templates, context, and database operations of every request, among other
useful stats. We'll see it again in future activities.

- For this challenge, look-up, install, and configure Django Debug Toolbar

HINT: This will require the following steps:

1. Using `pipenv` to install it
2. Modifying or creating the following lists in settings.py:
    - `INSTALLED_APPS` (modify)
    - `MIDDLEWARE` (modify)
    - `INTENRAL_IPS` (create)
3. Adding the required code to `urls.py`



Bonus Challenge 2
-------------------

Background: Django Quill Editor is a package that adds an attractive
JavaScript-based rich text editing (e.g.  bold, italics, etc) to replace any
form textarea.

- For this challenge, look-up, install, and configure Django Quill Editor
- <https://github.com/LeeHanYeong/django-quill-editor>

HINT: The instructions include unnecessary steps! You don't have to modify the
Model at all, for example.

Extra Challenges:
-------------------

(No solution provided)

Some more popular Django packages that are immediately useful. These all have
been used in various projects by the authors of this curriculum, and come
recommended!

- Authorization:
    - django-allauth - Improved user registration including social auth.
- Frontend optimization:
    - django-compressor - Compress JavaScript/CSS into a single cached file.
    - easy-thumbnails - Image thumbnails for Django.
- Models:
    - django-taggit - Simple model tags.
- Forms:
    - django-crispy-forms - DRY Django forms.
    - django-floppyforms - Full control of form rendering.
    - django-autocomplete-light - Add autocompletion to forms.

If you have more time, look up these packages and attempt to integrate them
into your class project(s) or side-projects!

Finally, one more "add-on" that deserves mentioning is Django REST Framework
(often shortened to DRF). This is a powerful and flexible toolkit for building
your own REST APIs. It's kind of a big framework by itself, so powerful that
it's could probably have it's own course devoted to it. In the humble opinion
of the author of this curriculum, this is the perhaps the best framework in any
language for building a custom REST API. However, it's A LOT to learn, so only
recommended you look into this when you have plenty of time!

