from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()

    # Challenge 6: Add cover URL field
    cover_url = models.URLField(max_length=200, blank=True)

