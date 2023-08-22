# Challenge 1:
# Uncomment the following code. Check that it is correctly creating a file.
open('myfile.txt', 'w+').write('Hello file world!')


# Challenge 2:
# First, store in a variable the name of your favorite sports team (or movie).
# Then, write the code necessary to write this data to a file called
# "sports_team.txt".
sports_team = 'Green Bay Packers'
open('sports_team.txt', 'w+').write(sports_team)



# Challenge 3:
# Using append mode ('a+'), write the names of the programming languages you
# are learning in this course to a file named "languages.txt".
open('languages.txt', 'a+').write('Python\n')
open('languages.txt', 'a+').write('Bash\n')
open('languages.txt', 'a+').write('JavaScript\n')
open('languages.txt', 'a+').write('HTML\n')
open('languages.txt', 'a+').write('CSS\n')




# Bonus Challenge 1:
# Write code such that every time you run this script, it will increment file
# the number found in "count.txt" by one.
number = open('count.txt').read()
number = int(number)  # Convert it to "int" from string
number = number + 1
number = str(number)  # Convert it back to be a string
open('count.txt', 'w+').write(number)




# Extra Bonus Challenge 2:
# Look up how to do "rot13" cypher in Python. Can you write the code that reads
# in a file, applies rot13, then writes back the result to the same file?
import codecs
text = open('languages.txt').read()
text_rot_13 = codecs.encode(text, 'rot_13')
open('languages.txt', 'w+').write(text_rot_13)


