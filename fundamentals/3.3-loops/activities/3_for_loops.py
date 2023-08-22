# REMINDER: Start with print, and save and test after every change.
from collections import defaultdict
print('Tester statement')
print('Challenge 1 -------------')
# Challenge 1:
# Can you write the code to do a for-loop across "fave_things" printing out
# each item?
fave_things = [
    'cats',
    'dogs',
    'books',
]
for i in fave_things:
    print(i)

print('Challenge 2 -------------')
# Challenge 2:
# Uncomment the following code. Fix the typos!

""" for item in fave_things:
    print('i like', item)

for item in fave_things:
    print('i like', item)

for item in fave_things:
    print('i like', item) """


print('Challenge 3 -------------')
# Challenge 3:
# One of the most popular uses of for loops is to process numeric data. In this
# challenge, you will be looping through the grades, adding them all together.
# Then, you should print the result of sum of grades.
grades = [
    91.4,
    85.3,
    95.0,
    33.5,
]
total = 0
for g in grades:
    total += g


# TODO: Fill in here...
# HINTS:
# To add a number to a variable, you can use the shortcut +=, as such:
# total += 10
# This can also be used for a variable, such as the variable you use in a
# loop:
# total += grade
print(total)


print('Challenge 4 -------------')
# Challenge 4:
# 1. Let's repeat Challenge 5 from the previous activity, only using the
# superior for loops. (It's okay if you didn't get to it)
# 2. Examine the following data. Write a for loop that will look at each item
# in the list, and output each row of data in the format of:
# Top hit from the 60s: I'm a believer ...  Artist: The Monkees.
data = [
    ["I'm a Believer", 'The Monkees'],
    ['Respect', 'Aretha Franklin'],
    ["(I Can't No) Satisfaction", 'The Rolling Stones'],
    ['Good Vibrations', 'The Beach Boys'],
    ['My Girl', 'The Temptations'],
    ["I Can't Stop Loving You", 'Ray Charles'],
    ["Blowin' in the Wind", 'Bob Dylan'],
]

for song, artist in data:
    print(f"Top hit from the 60s: {song} ...  Artist: {artist}.")


# Hint: Once you get it working, see if you can refactor it using the following
# Python trick:
# for song, artist in data:


print('Challenge 5 -------------')
# Challenge 5:
# Time to handle more complicated (and realistic) data structures.
# 1. Examine the following data. What data types are we dealing with?
# 2. Write a for loop that goes through them, printing out information about
# each made-up product. The format should match the example below:
#
# --- Product ---
# Name: Nodular Coagulator
# Supplied by: Wisozk Inc
# Available: 261 (at $10.47 a piece)
# ---------------
# 3. BONUS: Print out the total value of all inventory. This is the unit cost
# multiplied by quantity. To convert the unit cost into a float number from a
# string, use the following code:          (Can you understand how it works?)
#    unit_cost_as_float = float(unit_cost.strip('$'))

data = [
    {
        'product_name': 'Nodular Coagulator',
        'supplier': 'Wisozk Inc',
        'quantity': 261,
        'unit_cost': '$10.47',
    },
    {
        'product_name': 'Juniperus Testator',
        'supplier': 'Keebler-Hilpert',
        'quantity': 292,
        'unit_cost': '$8.74',
    },
    {
        'product_name': 'Dextro Consolidator',
        'supplier': 'Schmitt-Weissnat',
        'quantity': 211,
        'unit_cost': '$20.53',
    },
]
total_inventory_value = 0
for i in data:
    product_name = i['product_name']
    supplier = i['supplier']
    quantity = i['quantity']
    unit_cost = float(i['unit_cost'].strip('$'))
    print(f"""--- Product ---
Name: {product_name}
Supplied by: {supplier}
Available: {quantity} (at ${unit_cost} a piece)
---------------""")
    total_inventory_value += (quantity * unit_cost)
print("$", total_inventory_value)

print('-------------')
# Bonus Challenges:
# Refactor the previous challenge to use Python "f-strings".
# For example, using a multi-line string:
# results = f"""
#    Some text: {variable_name}
#    Other text: {dict_name['key']}
# """
# An article describing: https://www.blog.pythonlibrary.org/2018/03/13/python-3-an-intro-to-f-strings/
# A much more thorough article: https://realpython.com/python-f-strings/


# Advanced Bonus Challenges:
# The "mode" value of a data set is the value in the data that appears the most
# often. Example: The "mode" of 1, 9, 2, 2, 14, 5, 9, 2  is "2"

# Challenge 1. Can you write a for loop that figures out the mode of a list of
# numbers?
numbers = [
    1, 547, 100, 3123, 42, 12814, 42, 364, 317, 42, 38747, 213, 1, 42, 134,
    547, 213, 132.3, 904, 348, 12, 94, 238, 448,
]
tracker = defaultdict(int)
for n in numbers:
    tracker[n] += 1


def mode(d): return max(d, key=d.get)


print(mode(tracker))


print(max(numbers, key=numbers.count))
# Challenge 2. Can you figure out a short and simple Python "one-liner" to find
# the mode of a list?
# Hint: The solution uses built-in "max" function, and the list method "count",
# look these up!
