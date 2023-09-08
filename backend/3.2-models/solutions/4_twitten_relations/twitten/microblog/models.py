from django.db import models
from django.contrib.auth.models import User

import hashlib

class Tweet(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    text = models.CharField(max_length=160)

    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    image = models.FileField(upload_to='tweet_images/', null=True, blank=True)

    liked = models.ManyToManyField(
        User,
        related_name="liked_tweets",
    )

    def get_gravatar(self):
        # This is the example code found online for Gravatar, which will
        # randomly generate avatars based on email (we'll use user.username in
        # this case).
        email = self.user.username
        encoded = hashlib.md5(email.encode('utf8')).hexdigest()
        gravatar_url = "http://www.gravatar.com/avatar/%s?d=identicon" % encoded
        return gravatar_url

    def __str__(self):
        return self.user.username + ' said ' + self.text

