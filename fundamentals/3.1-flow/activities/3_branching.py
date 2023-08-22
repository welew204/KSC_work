# Challenge 0: Remember, what's the first thing you should add to any Python
# file you are working with?
# (Answer: add a "print", to make sure you are editing the right file!)


print('------------- Challenge 1')
# Challenge 1:
# After line 17, each portion of code has one or more typos.  Uncomment the
# following lines of code and fix the typos and mistakes as you go along.

name = "Brock"
if name == "Brock":
    print("Hi Brock!")
else:
    print("I don't know who you are.")

name = "Gary"
if name == "Brock":
    print("Hi Brock!")
else:
    print("I don't know who you are.")

age = 22
if age > 21:
    print("Old enough to drink")
else:
    print("Too young to drink")

age = 17
if age > 21:
    print("Old enough to drink")
else:
    print("Too young to drink")


print('------------- Challenge 2')
# Challenge 2:
# Time for more if-statement practice. For each of the following variables,
# examine the comment, and write code using if/else that conditionally prints
# "yes" or "no" if the condition described by the comment is met.

# Note: The goal is to get practice writing the if statements. They will do the
# same thing each time you run them, so it's not very realistic or useful in
# this example.

person_a = 'johann'    # is
if person_a == 'samantha':
    print("yes")
else:
    print("no")
person_b = 'samantha'  # is person_b equal to 'samantha'?

x = 100  # is x greater than 50?

y = 13   # is y equal to 50?


print('------------- Challenge 3')
# Challenge 3:
# Look at your Python Week 3 cheatsheet. Examine the syntax and behavior of the
# following concepts: "elif", "pass", "and", "or"
#
# Create variables and experiment with writing if statements that demonstrate
# all employ all of these features. The end result will look like Challenge 2,
# but it is up to you what you want to name your variables and which conditions
# you want to check for.
wizard = "Dumbledore"
if wizard == "Merlin":
    print("Where's my owl?!")
elif wizard == "Gandalf":
    print("Beware, Sauron!")
elif wizard == "Racist":
    pass
else:
    print("'Well hello Mr. Potter...'")


print('-------------')
# Bonus Challenge 1:
# Try uncommenting the following code. Can rewrite the if statements from the
# top to depend on user input?
name = input('Name? ')
if name == '':
    name = input("Oops, that wasn't quite right. Try again! ")
age_string = input('Age? ')
for d in age_string:
    if 47 < int(ord(d)) < 58:
        pass
    else:
        age_string = input(
            'Oops, you gotta do that again. Only NUMBERS, k?\n Age? ')

age = int(age_string)


# Bonus Challenge 2:
# - Background: In Activity 2 - Advanced Bonus Challenge, you were instructed
# to create a "locations" data structure using the container types we have been
# practicing. If you haven't done this bonus challenge, do it now.
# 1. Copy the "locations" data here.
# 2. Can you use "inputs" to ask the user for information on another location
# and add it to the list?
