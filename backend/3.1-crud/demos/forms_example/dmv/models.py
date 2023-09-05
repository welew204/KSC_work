from django.db import models

# Here we define a registration model to store
class Registration(models.Model):
    # First name and last name defined as CharField
    first_name = models.CharField(max_length=127)
    last_name = models.CharField(max_length=127)

    # First name and last name defined as CharField
    street_address = models.TextField()

    # Email fields automatically check for valid emails before saving
    email = models.EmailField()

    # Visit date is a "DateField" -- this only holds a date (not a time)
    visit_date = models.DateField()

