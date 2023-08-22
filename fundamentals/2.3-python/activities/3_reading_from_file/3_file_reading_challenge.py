# print('--------------- Challenge 1')
# Challenge 1:
# This code opens and reads a file, and puts the results into the variable
# named "contents".
# - Use print to print out the variable "contents" to make sure its working.
# - When working correctly, it should say "Hello File I/O World!"
import random
contents = open('hello_world_file.txt').read()
# print(contents)


# print('--------------- Challenge 2')
# Challenge 2:
# Using Challenge 1 as a guide, write 3 lines of code to read the three text
# files in the "frankenstein" directory, which contain excerpts of the text of
# the novel, and put the results into three different variables named
# chapter_1, chapter_2, and chapter_3 respectively.
chp_1 = open('frankenstein/chapter_1.txt').read()
chp_2 = open('frankenstein/the_second_chapter.txt').read()
chp_3 = open('frankenstein/AND_here_is_THE_third.txt').read()
#
# Combine ("concatenate") the three chapters into a single variable, and print
# out that single variable.
total_frank = chp_1+chp_2+chp_3
# print(total_frank)


# print('--------------- Challenge 3')
# Challenge 3:
# Using your text editor, examine the HTML fragments in the html_fragments
# directory. Can you figure out, based on indentation and other clues, which
# order the 4 fragments should be assembled in to make a valid HTML page?
#
# Write code that reads in these files and then combines them with that
# ordering.
# order = D, A, C, B
D = open('html_fragments/fragment_d.html').read()
A = open('html_fragments/fragment_a.html').read()
C = open('html_fragments/fragment_c.html').read()
B = open('html_fragments/fragment_b.html').read()
total_page = D+A+C+B
# print(total_page)


# Bonus Challenge
# Remember that we can redirect the output of a command into a file using ">"?
# See if you can use Bash (or zsh) & Python in conjunction to reconstruct the
# whole HTML page using this technique into a HTML file.
# ###DONE

# Advanced Bonus Challenge
# This Bonus Challenge is beyond what we have taught in Python. Only spend time
# on it if you are looking for a greater challenge!
# Randomize the order of words in the Frankenstein excerpt, and print out the
# randomized version.
# Hint:
#  - First look up Python code on how to convert a string into a list of words
frank_as_list = total_frank.split()
random.shuffle(frank_as_list)
# random.shuffle shuffles the list IN PLACE, and returns None :)
print(' '.join(frank_as_list))
#  - Then look up Python code on how to randomize the order of a list
