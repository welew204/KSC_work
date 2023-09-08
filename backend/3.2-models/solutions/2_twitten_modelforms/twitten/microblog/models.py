from django.db import models

import hashlib

class Tweet(models.Model):
    username = models.CharField(max_length=30)
    text = models.CharField(max_length=160)

    # Challenge 2: Look at these fields. Just look at them.
    #
    # Introducing auto_now_add=True! This makes a date that will be
    # automatically populated as soon as the Tweet enters the database.
    # "auto_now" does something similar, except also will be updated if
    # we update the tweet.
    # In the real world, most models get these two fields, since it is
    # typically very helpful to know when things were created and when
    # they were modified.
    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    # Introducing models.FileField!
    # This allows us to attach an image to each tweet. The "null=True,
    # blank=True" can be added to any field you want to be "optional".
    image = models.FileField(upload_to='tweet_images/', null=True, blank=True)

    def get_gravatar(self):
        # This is the example code found online for Gravatar, which will
        # randomly generate avatars based on email (we'll use username in this
        # case).
        email = self.username
        encoded = hashlib.md5(email.encode('utf8')).hexdigest()
        gravatar_url = "http://www.gravatar.com/avatar/%s?d=identicon" % encoded
        return gravatar_url

    def __str__(self):
        return self.username + ' said ' + self.text

