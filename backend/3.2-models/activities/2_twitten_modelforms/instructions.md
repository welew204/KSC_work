As before:
- The beginning of these activities is working on code understanding
- One challenge at a time
- Use print statements to debug - early and often


Challenge 1:
-------------------

Get this code running. You should see a site that might coincidentally
resemble a popular microblogging service when it is fully working. Refer
to the steps from previous activities if you get stuck.

Generally, it requires three steps:

    pipenv --python 3
    pipenv shell
    pipenv install django

Then finally:

    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver

Click around a little, until you understand the app.




Challenge 2:
-------------------

Discuss in your own words the following aspect of the Django project:

* Examine microblog/models.py. Look at the new fields and comments. Can you
  explain in your own words what these fields are doing?
  >>>> the new date fields are prompted to auto-add (or update with datetime of 'now')
  >>>> the image field is a file-upload, and is optional (indicated by `null=True, blank=True`)


* Examine microblog/admin.py.  Create a superuser (python manage.py
  createsuperuser) and examine the admin interface. Try uploading an image to a
  tweet using the admin interface.
  >>> doesn't take HEIC image types

* See how the image appears in the feed when viewing "/all-tweets/"? Can you
  find the template code that does this?
  >>> yep, here: (/Users/williamhbelew/Desktop/KSC/backend/3.2-models/activities/2_twitten_modelforms/twitten/microblog/templates/snippets/tweets.html), and it has this code:
  ```html
  {% if tweet.image %}
  <img src="{{ tweet.image.url }}" style="max-height: 80px"/>
  {% endif %}
```





Challenge 3:
-------------------

Using the code in demos/modelform.py as a reference, replace the User creation
process with a ModelForm that does the same thing.

Hint #1: In the place of using "user = User.objects.create(...)", use the
following code to create the user with the data specified:

    user = form.save()

Hint #2: Don't worry about the widget chosen for the password, for now.

# DONE



Challenge 4:
-------------------

Replace the Tweet creation process with a ModelForm.

Hint: In the place of using form.save(), use the following code:
    tweet = form.save(commit=False)
    tweet.username = username
    tweet.save()

The commit=False allows us to make a change to the new Tweet we created before
we save it to the database.





Challenge 5:
-------------------

Using the code in demos/modelform.py as a reference, replace the User profile
editing process with a ModelForm that does the same thing.

>>> change the EditUserForm, then changed the view func


Challenge 6:
-------------------

*(Optional more practice -- feel free to skip to Challenge 7)*

Using the code in demos/modelform.py as a reference, replace the Tweet editing
process with a ModelForm that does the same thing.


Challenge 7:
-------------------

Okay, time to enable tweets with image upload! You'll need to do 3 things:

1. Ensure the 'file' field is included in the ModelForm's field list.  This
should be enough to show the file upload field when rendering the form
(although it won't work just yet).

2. Tell the browser to enable file uploads. This requires a change to the
`<form>` tag. This will require adding this special "enctype" property to your
form, as such:

        <form enctype="multipart/form-data" method="post" action=".">

3. When creating your tweet, do something like:

        TweetForm(request.POST, request.FILES)



Bonus Challenge - Code Comprehension
-------------------------------------

- Open up the DB file. What is actually being stored when you upload an image?
>>>> just the PATH to the file; this path gets defined in the settings file by the MEDIA_ROOT var; the url of the file is generated using the MEDIA_URL var

- Look at the very end of the `twitten/settings.py` file. To get uploads
  working, we had to add a couple of tweaks. Can you broadly get what they are
  doing?s

- Extra ModelForm features:
    - How do you customize which widget gets used?
    - Hint: See "overriding-the-default-fields":
      <https://docs.djangoproject.com/en/2.2/topics/forms/modelforms/>



Advanced Challenge - Code Comprehension
---------------------------------------

Using a deployment method like Heroku will wipe away your uploads every time
you push. This has to do with "12 Factor" apps, which is an approach or
philosophy to web app development. Thus, this the uploads/ directory is only
good for development. In production, we will want to use something called an
"object store", kind of like a database for large files. The most popular
object store is Amazon S3.

- Read about 12factor app: https://12factor.net/

- Research Amazon S3, and how to set it up with Django. Heroku has an add-on
  that makes this process easier:
https://elements.heroku.com/addons/bucketeer

- Note: It's possible to instead store the file contents in the database
  itself, but this is considered bad practice, since databases can't maintain
  their speed if they have massive files inside of them.
