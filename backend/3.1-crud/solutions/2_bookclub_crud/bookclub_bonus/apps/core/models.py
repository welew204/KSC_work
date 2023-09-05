from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()

    reading_list_name = models.CharField(max_length=30, null=True, blank=True)
    cover_url = models.URLField(max_length=127)

    def __str__(self):
        return self.title

class ReadingList(models.Model):
    class Meta:
        # Order by votes, ascending, and in case of tie, then by topic, then by
        # name
        ordering = [
            '-votes',
            'topic',
            'name',
        ]
    name = models.CharField(unique=True, max_length=30)
    topic = models.CharField(max_length=64)

    # For Advanced Bonus Challenges:
    votes = models.IntegerField(null=True, blank=True)
    creator_username = models.CharField(max_length=127, null=True, blank=True)

    def __str__(self):
        return self.name

