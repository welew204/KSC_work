# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Challenge 1:
# - Use pprint to instead print the "locations" list. Some almost finished code
# is included, commented out below.
# - Look up online how to modify it to use pprint to indent the output with 2
# spaces, and a width of 30 characters.
# Extra: Try out pprint on code you wrote for a homework or previous activity.

locations = [
    {
        'name': 'Sushi Burrito Palace',
        'latitude': 127.41,
        'longitude': 89.41,
        'review': [
            'I love it!',
            'Not great, had better',
        ],
    },
    {
        'name': 'Veggie Burger Land',
        'latitude': 127.43,
        'longitude': 86.01,
        'review': [
            'Ok',
        ],
    },
]

# import pprint
# pprint.pprint(...something goes here...)




print('Challenge 2 -------------')
# Challenge 2:
# Import syntax challenge! Once again, we have some commented code that
# has a variety of syntax errors. Go through each line and fix the
# syntax typo.
#IMPORT time
#import "subprocess"
#import.datetime()
#import = random
#print(random...randint(5, 10))
#data = ['a', 'b', c']
#random shuffle(data)
#print data




print('Challenge 3 -------------')
# Challenge 3:
# 
# 1. Examine the "example_json.json" file adjacent to this one. What do you
# see? JSON is a file format that is almost identical to Python dictionaries.
# 2. Uncomment the following code. Examine it. Add the missing import statement
# to get it working.
# 3. Combine it with Python code that reads the contents of the
# "example_json.json" file into a string

# Hint: To read in a JSON file, we don't use import, but the same way we have
# read other files in the past.

#some_json_text = '{"a": 3}'
#d = json.loads(some_json_text)
#print(d['a'])





print('Challenge 4 -------------')
# Challenge 4:
# 1. Import the 'sys' module, and print out the value of 'sys.argv'
# 2. What type of data is this?
# 3. Can you get extra values to be displayed when printing out sys.argv? Hint:
# When executing the Python program, see what happens when you add stuff AFTER
# the filename of the Python program.
# 4. Can you modify your code to print out ONLY the extra values, skipping the
# stuff that stays the same at the beginning? Hint: Use "list slicing" syntax





print('Challenge 5 -------------')
# Challenge 5:
# 1. Uncomment the two following lines of code.
# 2. Add the missing code to get them working, and print out the output.
# 3. What do they do? What are the differences between them?
# subprocess.run('ls')
# output = subprocess.check_output('ls')




print('Challenge 6 -------------')
# Challenge 6:
# Using the code from Challenge 5, plus the string method "split" and a
# for-loop, go through all the files in the current directory, printing the
# name of each one on a separate line.

# Can you figure out how to get rid of the "b"? (You'll know when you see it ;)





print('------------')
# Bonus Challenge:
# This one has many steps!
# 1. Install the "figlet" CLI application:
#     - Linux:
#         sudo apt install figlet 
#     - macOS:
#         brew install figlet 
#  
# 2. Write a stand-alone Python script that uses "time" to delay displaying a
# "Time's Up!" message in a large font.
# 3. Combine it with sys.argv it to make it a useful commandline timer.



