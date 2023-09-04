from django.db import models

# Challenge 2: TODO Create the WallPost model here


class WallPost(models.Model):
    username = models.CharField(max_length=20)
    text = models.TextField()
