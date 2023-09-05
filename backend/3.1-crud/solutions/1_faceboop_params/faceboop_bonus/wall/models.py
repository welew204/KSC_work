from django.db import models
from django.urls import reverse

class WallPost(models.Model):
    username = models.CharField(max_length=30)
    text = models.TextField()

class City(models.Model):
    class Meta:
        # This prevents the Admin interface from calling it "citys"
        verbose_name_plural = 'cities'

    title = models.CharField(max_length=50)
    slug = models.SlugField()

    def __str__(self):
        # This specifies how it will look in the Admin interface
        return self.title

    def get_absolute_url(self):
        # This provides a link in the admin to "View on site >"
        return reverse('view_city', args=[self.slug])

