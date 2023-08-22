# PYTHON WARM-UP

# HINT 1: Lines starting with '#' are comments & ignored
# HINT 2: Only do one challenge at a time! Save and test after each challenge.
# HINT 3: To run this code in a terminal:
# 1. Get a terminal open in this directory
# 2. Type in the following:
#         python3 1_intro_to_python.py


# ----- Challenge 1:
# 1. Write Python code here to print 'Hello World!'
# 2. Save this file
# 3. Run it it in a terminal
print("Hello World")


# ----- Challenge 2:
# Write more "prints" to print out your favorite poem, song lyric, or
# multi-line excerpt of text. There are a few ways to do this:

# 1. The more obvious is by writing many print functions, one after another,
# just like you did for "hello world" but more.

# 2. A less obvious one is by using ''' ''' or """ """ style quotation marks
# (triple quotation marks), that lets you go across many lines.

# Pick one (or both) and go for it!
'''print("""Primeval Self-Awareness
      body as deserted burning witness
      as ghost
      as leper""")'''


# ----- Challenge 3:
# Use print and arithmetic operators to print out the results of 3 different
# calculations. Hint: print(2 + 2) could be one, but try getting more
# complicated!
# print(578 * 31 % 3 + 1)


# ----- Challenge 4:
# - Try to guess why print('2 + 2') is different than print(2 + 2)
# - Try to guess why print('2' + '2') is different than print(2 + 2)
# --> ints v strings

# ----- BONUS CHALLENGE 1:
# The following Bonus Challenges are beyond what we have taught in Python, and
# include concepts that we will only teach later. Only spend time on them if
# you are looking for a greater challenge!

# Look up the 'format' string method for Python. 'Uncomment' the following
# lines and modify each of them to say 'The answer is 42'.
# This is a useful blog post: https://dbader.org/blog/python-string-formatting
""" noun = 'answer'
number = 42
print(f'The {"answer"} is {42}')
print(f'The {0} is {1}')
print(f'The {1} is {0}')
print(f'The {noun} is {number}') """

# ----- BONUS CHALLENGE 2:
# Look up Formatted String Literals. 'Uncomment' the following line and add
# extra code assigning variables to make it say 'The answer is 42'.
# print(f'The {noun} is {number}')

# ----- BONUS CHALLENGE 3:
# Do the same thing as before, except using this C-inspired "printf-style"
# Python string interpolation.
print('The %s is %i' % ('answer', 42))
# print('The %(noun)s is %(number)i' % {...something goes here...})
