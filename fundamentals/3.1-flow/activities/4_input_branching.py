# Challenge 0: Remember, to do the first thing for any Python activity!


print('------------- Challenge 1')
# Challenge 1:
# Write pseudocode (not real code) for the following application description:
# An application that accepts a username and password and checks them against
# known correct values and then will tell the user if they are logged in or
# not.
# HINT: When writing pseudocode in a code file, put it into comments. In
# Python, that can be accomplished by starting each line with a hash ( # ).

# log_in_permission = false
# return_obj = {}
# if users_dict doesn't exist:
# init it
# else:
# pass
# username, password = incoming_request
# if username in users_dict.keys():
# if password == users_dict[username]:
# log_in_permission = true
# return_obj = {log_in_permission, "Congrats!"}
# else:
# return_obj = {log_in_permission, "incorrect password"}
# else:
# return_obj = {log_in_permission, "user doesn't exist"}


print('------------- Challenge 2')
# Challenge 2:
# Uncomment the following line of code. Use "print" to say what the user typed
# back at them.
username = input('Username? ')
print(username)
password = input('Password? ')
print(password)


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
    print('logged in!')
else:
    print("Incorrect, go away")


print('-------------')

# Advanced Bonus Challenge
#
# Phase 1:
# Here is your task: Write a "data-entry" Python application that accepts:
# 1) a student name, and
# 2) their grade on a quiz (a number out of 100)
# It then adds their grade to a txt based on their name.
gradebook = {}


def update_gradebook(student_name, grade):
    if student_name not in gradebook.keys():
        gradebook[student_name] = [grade]
    else:
        gradebook[student_name].append(grade)


# Phase 2 (THIS ONE IS HARD!):
# Have it first ask "Add grade or get grade?"
# If they type "get", then read the file and compute an average grade
# If they type "add", then follow the above logic

request = input(
    'What would you like to do with the gradebook? \n(type "get" to get grade, or "add" to add a grade): ')
name = input('...and for which student? ')

if request == 'get':
    try:
        grades = gradebook[name]
        current_grade = sum(grades)//len(grades)
    except KeyError:
        print("Oops that person doesn't exist...")
elif request == 'add':
    grade = input(
        "What grade did they get that you'd like to add? (0 - 100 score pls, only integers): ")
    update_gradebook(name, grade)
else:
    print("Oops, I don't recognize that request. Try again?")


# HINT: First pseudocode this, then work on the actual Python.
