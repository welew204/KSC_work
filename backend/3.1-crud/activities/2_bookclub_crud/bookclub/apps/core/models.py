from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()

    # For Bonus Challenges:
    reading_list_name = models.CharField(max_length=30, null=True, blank=True)

    # For Advanced Bonus Challenges:
    votes = models.IntegerField(null=True, blank=True)
    creator_username = models.CharField(max_length=127, null=True, blank=True)

class ReadingList(models.Model):
    name = models.CharField(unique=True, max_length=30)
    topic = models.CharField(max_length=64)

    # For Advanced Bonus Challenges:
    creator_username = models.CharField(max_length=127, null=True, blank=True)

