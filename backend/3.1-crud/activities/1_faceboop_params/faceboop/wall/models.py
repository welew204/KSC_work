from django.db import models

class WallPost(models.Model):
    username = models.CharField(max_length=30)
    text = models.TextField()

# NOTE: User is a "built-in model" in Django, which means it's not included in
# models.py since it automatically comes with Django "for free" as it was
# written by Django developers. It has the following fields:

#class User:
#    username
#    first_name
#    last_name
#    password
#    email

# It has a few more fields than that. If you are curious about the others:
# https://docs.djangoproject.com/en/2.2/ref/contrib/auth/#fields

