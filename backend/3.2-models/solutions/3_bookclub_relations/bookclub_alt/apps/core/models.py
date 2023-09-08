from django.db import models

from apps.accounts.models import User

class ReadingList(models.Model):
    name = models.CharField(unique=True, max_length=30)
    topic = models.CharField(max_length=64)

    votes = models.IntegerField(default=0)
    creator_user = models.ForeignKey(User, on_delete=models.CASCADE)

    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    cover_url = models.URLField(max_length=127)

    # Solution:
    reading_list = models.ForeignKey(
        'core.ReadingList',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.title
