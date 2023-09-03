from django.db import models

# "Models" defined here
# - Each "class" is a category of data (these go into different "tables") on
# the database
# - Each line under the class, the "CharFields", become different columns in
# the database

class FaceboopFanPage(models.Model):
    name = models.CharField(max_length=127)
    image = models.CharField(max_length=127)
    email = models.CharField(max_length=127)
    password = models.CharField(max_length=127)
    date_joined = models.CharField(max_length=127)

class FaceboopPost(models.Model):
    username = models.CharField(max_length=127)
    text = models.TextField()

