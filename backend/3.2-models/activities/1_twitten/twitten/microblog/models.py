from django.db import models

import hashlib


class Tweet(models.Model):
    username = models.CharField(max_length=30)
    text = models.CharField(max_length=160)
    created = models.DateTimeField(auto_now_add=True)

    def get_gravatar(self):
        # Don't spend too much time worrying about this: This is the example
        # code found online for Gravatar, which is an API to generate avatars
        # based on email (we'll use username in this case).
        email = self.username
        encoded = hashlib.md5(email.encode('utf8')).hexdigest()
        gravatar_url = "http://www.gravatar.com/avatar/" + encoded + "?d=identicon"
        return gravatar_url

    def __str__(self):
        return self.username + ' said, epicly, ' + self.text

# NOTE: User is a built-in model in Django, which means it's not included in
# models.py since it automatically comes with Django "for free". It has the
# following fields:

# class User:
#    username
#    first_name
#    last_name
#    password
#    email
