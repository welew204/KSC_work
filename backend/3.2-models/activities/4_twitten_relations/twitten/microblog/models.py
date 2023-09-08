from django.db import models
from django.contrib.auth.models import User

import hashlib

class Tweet(models.Model):
    # Challenge #2:
    # "username" field has been replaced with "user" field - this stores the ID
    # number of the user doing the tweet (from the built-in User model)
    # username = models.CharField(max_length=64)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    text = models.CharField(max_length=160)

    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    image = models.FileField(upload_to='tweet_images/', null=True, blank=True)

    def get_gravatar(self):
        email = self.username
        encoded = hashlib.md5(email.encode('utf8')).hexdigest()
        gravatar_url = "http://www.gravatar.com/avatar/%s?d=identicon" % encoded
        return gravatar_url

    def __str__(self):
        return self.user.name + ' said ' + self.text


# NOTE: User is a built-in model in Django, which means it's not included in
# models.py since it automatically comes with Django "for free". It has the
# following fields:

#class User:
#    username
#    first_name
#    last_name
#    password
#    email


