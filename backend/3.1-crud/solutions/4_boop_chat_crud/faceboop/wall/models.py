from django.db import models

class WallPost(models.Model):
    username = models.CharField(max_length=30)
    text = models.TextField()

    like_count = models.PositiveIntegerField(default=0)


