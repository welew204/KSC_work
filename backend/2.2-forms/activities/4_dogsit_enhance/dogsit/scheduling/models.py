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

    # These are used for bonus challenges
    booked = models.BooleanField(default=False)
    booked_by = models.CharField(max_length=127, default='')

class Sitter(models.Model):
    first_name = models.CharField(max_length=127)
    last_name = models.CharField(max_length=127)
    email = models.CharField(max_length=127)
    phone = models.CharField(max_length=127)
    address = models.CharField(max_length=127)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

