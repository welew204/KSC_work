from django.db import models

# Create your models here.

class DriverRegistration(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    reason_for_visit = models.CharField(max_length=100)
    street_address = models.TextField()
    email = models.EmailField(blank=True) # allow blank ones
    visit_date = models.DateField()

