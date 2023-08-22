# REMINDER: Only do one challenge at a time! Save and test after every one.

# Challenge 0: Remember: Do the first thing for any Python activity.

print('Sheesh')
print('Challenge 1 -------------')
# Challenge 1:
# The following function and invocation have some typos and mistakes. Uncomment
# the lines, then fix them to get it running.


def comma_name(first_name, last_name):
    return last_name + ", " + first_name


author_name = comma_name('William', 'Shakespeare')
print(author_name)


print('Challenge 2 -------------')
# Challenge 2:
# 1. Write a function called "prepare_greeting". It should combine the string
# "Hello " followed with a name supplied as a positional argument, and return
# this combination. For example, for prepare_greeting('Joanna'), it should
# return 'Hello Joanna'
# 2. Write the functions invocation. Assign the return value to a variable.
# 3. Print the value of the variable.


def prepare_greeting(name):
    return f"Hello {name}"


greeting = prepare_greeting('Francis')
print(greeting)


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
# Hint: "(2 + 5) ** 0.5" gets the square root of 7


def pythag_th(side_1, side_2):
    res = (side_1**2 + side_2**2) ** 0.5
    return res


print(pythag_th(3, 5))
print(pythag_th(2, 2))
print(pythag_th(10, 61))


print('-------------')

# For the bonus challenges for this activity, let's tackle some traditional
# algorithm problems. Hard stuff! While this course is not focused on that,
# it's always a good mental and coding exercise.

# Bonus Challenge:
# Write a function that calculates if a given value is a prime number. Prime
# numbers are numbers that are evenly divisible only by themselves and 1. The
# function should be called "is_prime" and return True if the given number
# is_prime, and False if it is not.


def is_prime(number):
    i = 2
    while i < number:
        if number % i == 0:
            return True
    return False


# Hint #1: The first few prime numbers are: 2, 3, 5, 7, 11, and 13.
# Hint #2: To check if a number is evenly divisible by another, you can use the
# following snippet:
# if 6 % 3 == 0:
#    print('3 goes into 6 evenly!')

# Double bonus: What ways can you improve it to run faster?
# FIrst, I'd research primes, and see if there are any reasonable ways to rule out answers
# I imagine this may involve a tree that directs search for divisors, startin small and building
# OH-- I'd keep track of factors visited and skip any multiples of them (so after seeing that 5 doesn't work, I could skip
# 10, 15, etc)


# Advanced Bonus Challenge:
# Write a function that calculates the longest palindrome "sublist" within a
# list. A palindrome is the same backwards or forwards. In this case, a
# "sublist" is defined as a list found within another list.
# It should accept a list as an argument, and return a new list as a return
# value.
# Hint #1: First write a function that checks if a given list is a palindrome.
# Hint #2: Use list[3:6] to get a sublist starting at index 3 and going until index 6

# For example, for a list like:
# ['a', 'b', 'c', 'b']
# The longest palindrome sublist is ['b', 'c', 'b']

# And a list like:
# ['a', 'k', 'b', 'c', 'b', 'k', 'm', 'k']
# The longest palindrome sublist is ['k', 'b', 'c', 'b', 'k']


# Very Advanced Bonus Challenge:
# Already a coder, want a Python-specific challenge?
# Look up "yield" statement in Python, along with for loops. Can you rewrite
# this to use 1) a generator function (e.g. one that uses yield within a loop)
# that generates all sublists given a list, 2) a generator function that
# generates all palindromes given a list, and then use Python's built-in "max"
# function to find the largest palindrome.
