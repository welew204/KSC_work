from django.db import models

# Here we define our data model:
# - It consists of one type of "thing" (called a "Model")
# - This is how we will store info about our DogAppointment
class DogAppointment(models.Model):
    # CharField refers to text
    name = models.CharField(max_length=127)
    time = models.CharField(max_length=127)
    date = models.CharField(max_length=127)
    # IntegerField refers to a number
    age = models.IntegerField()

class Sitter(models.Model):
    first_name = models.CharField(max_length=127)
    last_name = models.CharField(max_length=127, default='')
    email = models.CharField(max_length=127, default='')
    phone = models.CharField(max_length=127, default='')
    address = models.CharField(max_length=127, default='')

