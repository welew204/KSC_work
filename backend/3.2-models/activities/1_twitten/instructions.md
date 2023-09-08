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

    python manage.py migrate
    python manage.py runserver

Click around a little, until you understand the app. The app should be
functioning mostly as-is, but missing certain functionality: Notably, deleting
and editing posts.



Challenge 2: Code Comprehension
--------------------------------

In your own words, discuss the following aspect of the Django project:

- Look at lines 92-102 of microblog/views.py. This performs the "R" in CRUD,
  and set up the context for rendering the template. Can you explain what each
  line is doing?
  ```python
  tweets = Tweet.objects.order_by('-created')
  # grabs from db all Tweet objects, ordered by the value in the column keyed by '-created' (probs a date)
  tweets_by_user = tweets.filter(username=username)
  # further filters these 'tweets' to only match on where username equals the username param handed into the view function
  user = User.objects.get(username=username)
  # gets the user object from the db

  context = {
      'tweets': tweets_by_user,
      # hands ALL user tweets to context
      'form': form,
      # hands the NewTweet form to context
      'user_on_page': user,
      # hands the user.object to context
      'is_me': user == request.user,
      # gives a boolean showing if user should be seeing this view (or not)
  }```


- Explore the admin interface for Twitten:
    - Create a superuser (python3 manage.py createsuperuser) and examine the
      admin interface.
    - Note `microblog/admin.py` - Custom models do not appear by default, but
      instead a line of code has to be added.
    - Try creating and deleting tweets.

- Examine microblog/models.py.
    - Do you see the `def __str__` method of the Tweet class? Does the text or
      structure look familiar to something you just saw?
    - What do you think it is doing? Try modifying it (slightly, e.g. only
      change "said" to "tweeted") and see if you can confirm what it is doing.




Challenge 3: Code Comprehension
--------------------------------

In your own words, discuss the following aspect of the Django project:

1. Compare twitten/urls.py and microblog/views.py. Can you figure out how to use
  your browser to delete a tweet?
    - HINT: No code changes are necessary! To accomplish this, you need to type
      a URL in the browser's navigation bar to cause it it to happen.
      >>> just use the tweet id (found on examining the source w/ browser inspection), add to `/delete-tweet/<tweet_id>` path, which triggers delete_tweet view function, and removes the tweet

2. Examine the `microblog/templates/pages/all_tweets.html` and the
  `microblog/templates/pages/user_page.html` files. Can you explain what the
  "include" template-tag is doing? Why do you think we have a "snippets"
  directory?
    - HINT: Not a trick questions, it's exactly what you might first guess.
    >>> include just plops in the snippet as if it's more template (so can take context variables/objects)




Challenge 4:
-------------------

Ever said something you wish you hadn't? Time to add a delete feature.  Use the
research you did in Challenge 3 to figure out how to add a link to every tweet
that will delete that tweet.

- HINT #1: You should accomplish this ONLY by editing a template.
- HINT #2: You can access the tweet's ID by using {{ tweet.id }}



Challenge 5:
-------------------

Now, make sure the delete link only appears on tweets that you tweeted.
E.g. you shouldn't be presented a link to delete other people's links.

- HINT #1: You should accomplish this ONLY by editing a template.
- HINT #2: You can access the currently logged in user with "user" (this is
  built-in to Django)
- HINT #3: Use an if statement, you can do something like like:
    {% if user.username == "dril" %}
    {% endif %}
- HINT #4: Still stuck? See `code_hints.html` for some example snippets



Challenge 6:
-------------------

Currently, the edit profile link appears on every page. Make it only appear on
the page of the user who is logged in.

- HINT #1: You should accomplish this ONLY by editing a template.
- HINT #2: You can access the currently logged in user with the "user" context
  variable (this is built-in to Django), and you can access the user of the
  profile you are viewing with `user_on_page` (this is not built-in to Django,
  but rather specified in this particular app's views, see the `def user_page`
  view in views.py).
- HINT #3: Still stuck? See `code_hints.html` for some example snippets





Bonus Challenge #1:
-------------------

Implement an "Edit Tweet" feature. This one requires A LOT of template-fu!

- HINT #1: You can accomplish this ONLY by editing a template.
- HINT #2: See `code_hints.html` for some example snippets


Bonus Challenge #2:
-------------------

Look up Bootstrap modals. Make your "Tweet Editor" appear in a modal for a
smoother user experience (UX).

- HINT #1: You can accomplish this ONLY by editing a template.
- HINT #2: See `code_hints.html` for some example snippets


Advanced Challenge: Code Comprehension
---------------------------------------

If you followed the instructions (and only edited the template), this
application has A LOT of security holes. What are they? How would you exploit
them? How would you fix them?

