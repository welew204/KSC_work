# REMINDER: Start with print, and save and test after every change.

print('tester statement')
print('Challenge 1 -------------')
# Challenge 1:
# Uncomment the following code. Fix the mistakes to get it to work and print 3
# lines saying "It's as easy as 0" "It's as easy as 1" and "It's as easy as 2".

for x in range(3):
    print("It's as easy as", x)


print('Challenge 2 -------------')
# Challenge 2:
# Uncomment each of these 4 for-loops (A, B, C, and D). Right now, the
# for-loops print the numbers 0 through 9. Modify each for-loop to print out
# the numbers listed in the comment above the for-loop instead.

# Hint 1: This will only involve modifying the part that says "range(10)"
# Hint 2:
#     range(10)         ->  0 1 2 3 4 5 6 7 8 9
#     range(5, 10)      ->  5 6 7 8 9
#     range(2, 12, 3)   ->  2 5 8 11


# A     0 1 2 3 4
print('A ----')
for x in range(5):
    print(x)

# B     3 4 5 6 7
print('B ----')
for x in range(3, 8):
    print(x)

# C     9 11 13 15
print('C ----')
for x in range(9, 16, 2):
    print(x)

# D     15 14 13 12 11
print('D ----')
for x in range(15, 10, -1):
    print(x)


print('Challenge 3 -------------')
# Challenge 3:
# Loop through the following dictionary displaying the word in English and the
# word in Portuguese. The first item should be displayed like:
# dog : cachorro
# Hint: Use translations.items() to loop
translations = {
    'dog': 'cachorro',
    'cat': 'gato',
    'bread': 'pão',
    'lettuce': 'alface',
    'tomato': 'tomate',
    'tofu': 'tofu',
}
for e, p in translations.items():
    print(f"{e}:", p)


print('Challenge 4 -------------')
# Challenge 4:
# Use "enumerate" to make a for loop that will loop through the following foods
# and print them out along with a number (1-3).
# Hint #1: The result should be like this:
#     1. banana
#     2. apple
#     3. pear
# Hint #2: Google "Python3 enumerate"

fave_foods = [
    'banana',
    'apple',
    'pear',
]

for i, v in enumerate(fave_foods):
    print(f"{i+1}. {v}")


print('Challenge 5 -------------')
# Challenge 5:
# Time to practice the "in" operator.

# HINT: the "in" operator as used below, ie in "if" statements or "while" loop
# conditions, is UNRELATED to the "in" inside of for-loops (which has no
# meaning outside of for-loops), and just coincidentally the same. However,
# it's good to know, and worth practicing now.

# 1. Uncomment and try the following code as an example:
if 'banana' in fave_foods:
    print('Banana is a favorite food')
else:
    print('Banana is not a favorite food')

# 2. Write an if statement to check if bread is a favorite food
if 'bread' in fave_foods:
    print('Bread is a favorite food')
else:
    print('Bread is not a favorite food')
# 3. Write an if statement to check if bread is in the English Portuguese
# dictionary
if 'bread' in translations.keys():
    print(True)
else:
    print(False)
# 4. Write an if statement using "in" and "range" to check if 55 is an odd
# number between 51 and 100
x = 55
if x in range(51, 101, 2):
    print("X is odd!")
else:
    print("X is not odd.")


print('-------------')
# Bonus challenge #1:
# The following superheroes are in a list. Write for-loops that prints all "vs"
# match-ups between the super heroes. For example, "Magneto vs. Wonder Woman".
# 1. It should print all possible match-ups.
# 2. It should not print vs themselves, e.g. "Spiderman vs Spiderman"
superheroes = [
    'Wonder Woman',
    'Spiderman',
    'Magneto',
    'Catwoman',
]

# Bonus challenge #2:
# Read the documentation on itertools.combinations
# https://docs.python.org/3.8/library/itertools.html#itertools.combinations
# Can you figure out how to use combinations to rewrite the first Bonus
# Challenge #1 more elegantly, and to avoid repeated match-ups?
# Hint #1: To gain access to combinations, use the following code:
# from itertools import combinations
# Hint #2: Using combinations, it can be written in 2 lines of code.


###########################################
# Advanced Bonus Challenge: Word Count
###########################################
#
# This one is a true challenge! Write an application that reads in a text file
# (see the book text file found in the 4th activity), and generates a word
# count for each word it encounters.

# Full Requirements:
# - Sort the output either alphabetically, or by count.
# - Only print the top X number, e.g. top 100.
# - It should ignore case and punctuation.
# - Use string formatting methods to make the output easy to read.
# - The output, for example, might be something like:
#       the 1801
#       and 910
#        to 794
#       ...etc
