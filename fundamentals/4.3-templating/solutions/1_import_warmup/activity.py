print('Challenge 1 -------------')
# Challenge #1:

import csv
roster_file = open('athletics_40_roster.csv')
for row in csv.DictReader(roster_file):
    # We can print it on one line by comma separating in the print function
    print(row['Uniform'], row['Name'], row['Age'], row['Weight'], row['Height'])


print('Challenge 2 -------------')
# Challenge #2:
# 1. Use pipenv to create a new virtualenv for this activity:
#     pipenv --python 3
# 2. "Enter" the virtualenv
#     pipenv shell
# 3. Install Pint from PyPI
#     pipenv install pint
# 4. Pint is a library for converting between different unit, such as inches
#    and meters, or pounds and kilograms. Quickly read a little about Pint:
#    https://pint.readthedocs.io/en/latest/
# 5. Each of the commented lines has a mistake. Uncomment the following code
#    and fix the mistakes to get this example test usage of Pint working:

import pint
ureg = pint.UnitRegistry()
value = 3 * ureg.meter + 4 * ureg.inches
print(value)




print('Challenge 3 -------------')
# Challenge #3:
# Combine Pint with the code from Activity 1 to display all the baseball
# players' weights in kilograms.
roster_file = open('athletics_40_roster.csv')
for row in csv.DictReader(roster_file):
    # Convert weight to pounds, then to kilograms
    weight_in_pounds = float(row['Weight']) * ureg.pounds
    weight_in_kilograms = weight_in_pounds.to(ureg.kilograms)
    print('Weight of', row['Name'], 'is', weight_in_kilograms)




print('Challenge 4 -------------')
# Challenge #4:
total = 0
roster_file = open('athletics_40_roster.csv')
for row in csv.DictReader(roster_file):
    total = total + float(row['Weight'])

average = total / 40
average_lb = average * ureg.lb
average_kg = average_lb.to(ureg.kg)
print('Avg weight:', average_kg)
print('Avg weight:', average_lb)

