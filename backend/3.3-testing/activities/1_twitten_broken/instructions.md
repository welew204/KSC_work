SCENARIO: Ever stay up late coding? Ever stay up late drinking? Ever done both?
The scenario here is that you just started work at a company, and, like other
junior devs, you're put on "bug patrol".

The lead backend engineer just pulled off an all-night alcohol-fueled coding
rampage to get to MVP, and while she mostly implemented the product to
specifications, QA discovered dozens of new "regressions" (newly introduced
bugs). To make matters worse, everything was done as a single git commit, so
there's no way to just keep part of it. All these "tickets" (bits of work to be
done at a software company) got assigned to you -- just your luck! -- and so
now you have to clean up the mess. Time to tackle these tickets!

- Clue: Using "git diff", you determine that the engineer only edited the
  "views.py" file.

-----------------

As before, do one challenge at a time, and raise your hand if/when you
get stuck!

First task, as always, is to get this code running. You should see a
site that might coincidentally resemble a popular microblogging service.
Refer to the steps from previous activities if you get stuck.

Generally, it requires three steps:

    pipenv --python 3
    pipenv shell
    pipenv install django

Then finally:

    python manage.py migrate
    python manage.py runserver


Ticket #142 - User creation is broken
-------------------

Steps to reproduce:
1. Enter data in form to create new user
2. Instead of new user being created, an error page is shown


- HINT: This one is the simplest, as nonsense code was inserted somewhere in
  the project.

# DONE
Ticket #143 - Cannot create new tweet
-------------------

Steps to reproduce:

1. Try creating a new Tweet.
2. A database error is shown instead of creating tweet

- HINT: It is only one line. Look at the Tweet class for a hint.
# DONE


Ticket #144 - Clicking "Like" button does not cause tweet to be liked
-------------------

Steps to reproduce:

1. Log in as a user
2. Click on the Heart (like) button to like a tweet
3. The tweet does not get "liked" by me

- HINT #1: Liking the tweet is omitting an important bit of code. You
  need to use the ".add()" method to add a Many-To-Many relation (Users
  Liking Tweets). Can you find where you need to add code, and how to
  fix it?

- HINT #2: It is only one line. Look at the Tweet class for a hint.
  Documentation on ManyToMany is here:
  https://docs.djangoproject.com/en/2.0/topics/db/examples/many_to_many/

# DONE

Ticket #145 - Tweets in All Tweets page are in opposite order
-------------------

Steps to reproduce:

1. Log in as user
2. Create several tweets, observing correct ordering on user page
3. Navigate to All Tweets page, observe these tweets in the opposite
order

# DONE with one character '-'
Ticket #146 - Saving an updated tweet shows error
-------------------

Steps to reproduce:

1. Log in as user
2. Create a tweet
3. Click on edit tweet button
4. Modal appears, tweet can be edited, click "save"
5. Error page is shown, and updated tweet text is not saved

# DONE

Ticket #147 - Updating profile does not seem to reflect change
-------------------

Steps to reproduce:

1. Log in as user
2. Click on edit profile link
3. Change the first name and hit save
4. Profile page does not reflect changed settings





Ticket #148 (Enhancement) - Liked tweets stream
-------------------

User story: As a user, I would want to see what tweets my friends or
celebrities are "Liking".

Spec: Below the originally authored tweets, there should be a line
followed by the text "Liked tweets", followed by a list of the tweets
that the user liked.

# DONE to spec, but this shouldl be done differently.....

