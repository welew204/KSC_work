#####################################
#####################################
#####################################
#####################################
# NOTE: This file is included just in case you mess up your other models.py and
# want to quickly restore it.
#####################################
#####################################
#####################################
#####################################

from django.db import models
from django.utils.timezone import now

from apps.accounts.models import User

GENRES = [
    ('fiction', 'Adult Fiction'),
    ('nonfiction', 'Adult Non-Fiction'),
    ('children', "Children's Books"),
]

class ReadingList(models.Model):
    title = models.CharField(
        max_length=100,
    )
    category = models.CharField(
        max_length=64,
        choices=GENRES,
    )
    description = models.TextField(
        help_text='Reading list description',
    )

    creator_user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        help_text='User who created this reading list',
    )

    score = models.IntegerField(default=0)
    views = models.PositiveIntegerField(default=0)

    created = models.DateTimeField(auto_now_add=True) # Add current date
    last_modified = models.DateTimeField(auto_now=True)



class Book(models.Model):
    title = models.CharField(
        max_length=30,
    )
    description = models.TextField(
        blank=True,
    )
    reading_list = models.ForeignKey(
        ReadingList,
        on_delete=models.CASCADE,
    )

