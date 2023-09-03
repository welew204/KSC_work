from django.db import models

# - In models.py, we define the "data model" or the structure of what we store
# in the database
# - It consists of one type of "thing" (called a "Model")
# - This is how we will store info about our DogAppointment
class DogAppointment(models.Model):
    # CharField refers to text
    image_src = models.CharField(max_length=127)
    name = models.CharField(max_length=127)
    time = models.CharField(max_length=127)
    date = models.CharField(max_length=127)
    # IntegerField refers to a number
    age = models.IntegerField()

