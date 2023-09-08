from django.db import models

import hashlib

class Tweet(models.Model):
    username = models.CharField(max_length=30)
    text = models.CharField(max_length=160)
    created = models.DateTimeField(auto_now_add=True)

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

