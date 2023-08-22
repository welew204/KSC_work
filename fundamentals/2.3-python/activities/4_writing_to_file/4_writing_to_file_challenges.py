# Challenge 1:
# Uncomment the following code. Check that it is correctly creating a file.

# open('myfile.txt', 'w+').write('Hello file world!')


# Challenge 2:
# First, store in a variable the name of your favorite sports team (or movie).
# Then, write the code necessary to write this data to a file.
# my_team = "Oakland Roots"
# open('myteam.txt', 'w+').write(f'My favorite team is the {my_team}')

# Challenge 3:
# Using append mode ('a+'), write the names of the programming languages you
# are learning or going to learn in this course into a new file. Each language
# should be written on a separate line.
languages = ['Python', 'Javascript', 'CSS', 'html', 'SQL']
with open('languages.txt', 'a+') as lang_file:
    for lang in languages:
        lang_file.write(lang + '\n')


# Bonus Challenge:
# The following Bonus Challenges are beyond what we have taught in Python, and
# include concepts that we will only teach later. Only spend time on them if
# you are looking for a greater challenge!

# Write code such that every time you run this script, it will increment file
# the number found in "count.txt" by one.
# Hint 1: This is tricky, as you will have to read the file in first!
# Hint 2: Try using `int_var = int(some_str_var)` to convert from "str" to "int"
with open('count.txt', 'r+') as count:
    curr_count = count.read()
    int_var = int(curr_count)
    print(f'previous count: {int_var}')
    int_var += 1
    count.seek(0)
    count.write(str(int_var))


# Advanced Bonus Challenge:
# Look up how to do "rot13" cypher. Can you write the code that reads in a
# file, applies rot13, then writes back the result to the same file?
