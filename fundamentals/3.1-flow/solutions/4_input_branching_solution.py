print('------------- Challenge 1')
# Challenge 1:
# Write pseudocode (not real code) for the following application description:
# An application that accepts a username and password and checks them against
# known correct values and then will tell the user if they are logged in or
# not.

#   Ask for username, ask for password
#   if they gave the username of "AzureDiamond" and a password of "hunter2"
#      print "Logged on!"
#   otherwise
#      print "Incorrect, go away"
#

print('------------- Challenge 2')
# Challenge 2:
# Uncomment the following line of code. Use "print" to say what the user typed
# back at them.
username = input('Username? ')
password = input('Password? ')
print('You gave the username of ', username)
print('You gave the password of ', password)




print('------------- Challenge 3')
# Challenge 3
# Read the following Pseudocode:
#   if they gave the username of "AzureDiamond" and a password of "hunter2"
#      print "Logged on!"
#   otherwise
#      print "Incorrect, go away"
#
# Can you write it in Python?
if username == 'AzureDiamond' and password == 'hunter2':
    print('Logged on!')
else:
    print('Incorrect, go away!')


print('-------------')

# Advanced Bonus Challenge
#
# Phase 1:
# Here is your task: Write a "data-entry" Python application that accepts:
# 1) a student name, and
# 2) their grade on a quiz (a number out of 100)
# It then adds their grade to a txt based on their name.

# Phase 2 (THIS ONE IS HARD!):
# Have it first ask "Add grade or get grade?"
# If they type "get", then read the file and compute an average grade
# If they type "add", then follow the above logic

# HINT: First pseudocode this, then work on the actual Python.

add_or_get = input('add grade or get grade?')
if add_or_get == 'add':
    student = input('Adding: Student name? ')
    grade = input('Adding: Grade? ')

    # Open up a text file based on what they enter. Append their grade to the
    # file. The \n ensures that each grade will be on its own line.
    open('grades__' + student + '.txt', 'a+').write(grade + '\n')
else:
    student = input('Getting: Student name? ')
    grades_text = open('grades__' + student + '.txt').read()

    # splitlines() starts with a string, and then converts into a list of
    # strings where each item is a single line
    lines = grades_text.splitlines()

    # "List comprehension": advanced feature that lets us process an entire
    # list, such as converting it from one type to another
    numbers = (int(number) for number in lines)

    # "sum" will sum up the values contained in a list
    total_grade = sum(numbers)

    # And "len" will get the length of a list
    count = len(lines)
    print('Total grades:', count)

    # average = sum / number of items
    average = total_grade / count
    print('Average:', average)

