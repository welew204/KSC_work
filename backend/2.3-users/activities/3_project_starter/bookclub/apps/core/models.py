from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    cover_url = models.URLField(max_length=200, blank=True)
