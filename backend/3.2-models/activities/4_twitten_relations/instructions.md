Reminder:

- The beginning of these activities is working on code understanding
- One challenge at a time
- Use print statements to debug - early and often


Challenge 1:
-------------------

Get this code running. Generally, it requires three steps:

    pipenv --python 3
    pipenv shell
    pipenv install django

Then finally:

    python manage.py makemigrations microblog
    python manage.py migrate
    python manage.py runserver

You should see a site that might coincidentally resemble a popular
microblogging service.  This time, things will be slightly broken. We will need
to fix them one at a time.


Challenge 2: Code Comprehension
-------------------------------

A change has been made to the model structure as compared to the previous
activity.

1. Look at microblog/models.py -- can you identify how username has been
replaced with a ForeignKey to User?

2. Discuss: What benefits do we gain from making this change? Why would "real
twitter" do it this way?

3. For the rest of this activity, we will need to transforming our previous app
to use ForeignKey (that is, One-to-Many relationships) instead of just using
the username. Discuss with a partner which parts of the code you think will
have to change to make the tweets be related to the Users in the database as
opposed to their username (see below for hint)




HINT: When you make a change, you have to change each CRUD view function to
reflect this change, since no longer are we looking up by username, but instead
by user (in the DB, actually user ID)


Challenge 3:
------------

Now you need to change the "R" view to allow you to see the tweets.

You'll need to use code something like this, in your views.py around
line 88:

    tweets = Tweet.objects.order_by('-created')
    tweets_by_user = tweets.filter(user=user)

* If you have a chance, discuss with your partner what changed here, and why,
  in your own words.

If you did this successfully, you will now see tweets created with the admin
interface.



Challenge 4:
-------------------

Now, you need to change the view code so that users can post tweets
successfully again. Examine line 74 for what you need to change. Again, instead
of referencing tweet.username, you'll need to use tweet.user, as such:

    tweet.user = request.user




Challenge 5:
-------------------

Finally, you now need to change the templates to use the tweet.user
property instead of the tweet.username. You will also need to change (or
just simply delete) the gravatar method of the Tweet class.




Challenge 6:
-------------------

Add a "like" mechanism. This will require creating a ManyToMany field on
the Tweet object, with Users. This is because many users can like a
single tweet Tweet, and a single User can like many Tweets.

This is not an small task! As with all database tasks, a good approach
is to use the following order:

1. Add it to the model

2. Make migrations + migrate

3. Get it working in the admin interface

4. THEN, and only then, start working on the UI to make it work outside
the Admin interface

