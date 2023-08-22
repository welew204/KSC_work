# REMINDER: Only do one challenge at a time! Save and test after every one.


print('Challenge 1 -------------')
# Challenge 1:
# The following function and invocation have some typos. Uncomment the lines,
# then fix them to get it running.

def comma_name(first_name, last_name):
    return last_name + ", " + first_name
author_name = comma_name('William', 'Shakespeare')
print(author_name)



print('Challenge 2 -------------')
# Challenge 2:
# 1. Write a function called "prepare_greeting". It should combine the string
# "Hello " followed with a name supplied as an argument.
# 2. Write the functions invocation. Take the return value and put it into a
# variable. Once in the variable, it should print out the result.

def prepare_greeting(name):
    return 'Hello ' + name

prepare_greeting('Rosa')


print('Challenge 3 -------------')
# Challenge 3:
# Context: In geometry, the square-root of the sum of two squares determines
# the length of a line. This is called the "Pythagorean theorem".
# Write a function called "get_length" that calculates the Pythagorean theorem
# and returns the value. Invoke it for each of the following pairs, storing
# each result in a variable, and printing out the result:
# 3 and 5
# 2 and 2
# 10 and 61
# Note: It *should not* just print the value, but instead return the value.

def get_length(x, y):
    return (x * x + y * y) ** 0.5

a = get_length(3, 5)
print(a)
b = get_length(2, 2)
print(b)
c = get_length(10, 61)
print(c)


