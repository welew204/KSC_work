print('--------------- Challenge 1')
# Challenge 1:
# This code opens and reads a file, and puts the results into the contents
# variable. Add a print statement to print out the variable "contents" to make
# sure its working.

contents = open('hello_world_file.txt').read()
print(contents)


print('--------------- Challenge 2')
# Challenge 2:
# Using Challenge 1 as a guide, write 3 lines of code to read the three text
# files in the "frankenstein" directory, which contain excerpts of the text of
# the novel, and put the results into three different variables named
# chapter_1, chapter_2, and chapter_3 respectively.
#
# Combine ("concatenate") the three chapters into a single variable, and print
# out that single variable.
# Hint: Make sure to start with 'frankenstein/' so it can go into the
# appropriate directory.
chapter_1 = open('frankenstein/chapter_1.txt').read()
chapter_2 = open('frankenstein/the_second_chapter.txt').read()
chapter_3 = open('frankenstein/AND_here_is_THE_third.txt').read()
full_text = chapter_1 + chapter_2 + chapter_3
print(full_text)


print('--------------- Challenge 3')
# Challenge 3: 
# Using your text editor, examine the HTML fragments in the
# html_fragments directory. Can you figure out, based on indentation and
# other clues, which order the 4 fragments should be assembled in to
# make a valid HTML page?
f_1 = open('html_fragments/fragment_d.html').read()
f_2 = open('html_fragments/fragment_a.html').read()
f_3 = open('html_fragments/fragment_c.html').read()
f_4 = open('html_fragments/fragment_b.html').read()
full_html = f_1 + f_2 + f_3 + f_4
print(full_html)




# Bonus Challenge 1: 
# Remember that we can redirect the output of a command into a file using ">"?
# See if you can use Bash or zsh to reconstruct the whole HTML page using this
# technique into a HTML file.

# Solution: First remove excess print statements from this file, then do
# python3 3_file_reading_challenge.py > combined.html
# from Bash or zsh


print('---------------')
# Bonus Challenge 2: 
# Randomize the order of words in the Frankenstein excerpt, and print out the
# randomized version.
# No hints here, you are on your own! :o
import random
words = full_text.split()
random.shuffle(words)
words_recombined = ' '.join(words)
print(words_recombined)

