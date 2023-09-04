Challenge 1:
-------------------

Get the code running. You should see a site that might coincidentally resemble
a popular social network when it is fully working. Refer to the steps from
previous activities if you get stuck.

Generally, it requires three steps:

        pipenv --python 3
        pipenv shell
        pipenv install django


Then finally:

        python manage.py runserver


Click around a little, until you understand the app. Note that the posting and
search functionalities are (intentionally) broken.




Challenge 2:
-------------------

Discuss the following aspects of the Django project:

1. "faceboop" vs "wall", which is the Django project, which is the Django app?
>> "faceboop" is the project, "wall" is the app

2. Examine faceboop/urls.py. Note the "name=" parameter. Now, examine the
"wall/templates/base.html", see the code {% url "home" %} and {% url "feed" %}.
Can you guess what it might be doing?
>> that passes in urls from the url page to the template, based on the 'name' param

3. Can you figure out how the different navbar items highlight conditionally
based on what link you click on?
>> the class definition in the template is getting passed in some {% %} info (??)


Challenge 3:
-------------------

- Note how the form to post new content to the Faceboop feed isn't fully
  working. It has commented out code in the feed view (found in views.py).
- Finish the necessary code so that it saves the posted content to the database




Challenge 4:
-------------------

Take a look at the NewFanPageForm. Flesh it out to include the following
fields:

* name
* date joined
* email

Hint #1: As before, look for patterns, copy & paste & modify.

Hint #2: You might want to use an EmailField for email.  Look at previous
exercises, or demo code, for examples.



Challenge 5:
-------------------

Finish the code that uses NewFanPageForm so that it successfully creates new
fan pages when submitted, which are stored in the database.

- Hint #1: This is a tough challenge! You'll need to add some HTML / templating
  code to the home-page template AND some code to the homepage view-function.
  Look at how the FaceboopPost creation code is functioning as a clue.

- Hint #2: At the bottom of this file is relevant code from a previous activity
  (with some lines removed). You'll want to follow a similar pattern for your
  view-function.





Advanced Bonus Challenge:
-------------------------

Presently, the "search" view is only a stub (that is to say, the definition
exists, but has no code).  Implement the search box functionality. Create a new
"search" template.  Write the necessary functionality to only return posts that
contain the search term entered.

* For full functionality, make it be case insensitive (see: `__icontains`, at
  https://docs.djangoproject.com/en/3.0/ref/models/querysets/ )

* To DRY out your template, add a template snippet and using include in
  both feed.html and search.html to include it





Challenge 5: Code Hint
-----------------------

        if request.method == 'POST':
            form = SitterForm(request.POST)
            if form.is_valid():
                first_name = form.cleaned_data['first_name']
                # ...
                Sitter.objects.create(
                    first_name=first_name,
                    # ...
                )
                return redirect('/')
        else:
            form = SitterForm()

        context = {
            'form': form,
        }


