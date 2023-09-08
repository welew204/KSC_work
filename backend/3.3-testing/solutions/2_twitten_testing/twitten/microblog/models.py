from django.db import models
from django.contrib.auth.models import User

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

    def __str__(self):
        return self.user.username + ' said ' + self.text

