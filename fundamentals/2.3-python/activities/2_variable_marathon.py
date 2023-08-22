print('--------------- Challenge 1')
# Challenge 1: Add spam and eggs together, and put the result into a variable
# called "menu". Print the value of "menu".
spam = 100
eggs = 200

menu = spam + eggs
print(menu)


print('--------------- Challenge 2')
# Challenge 2: Repeat challenge 1, but for multiplication, division and
# subtraction, printing each result.
menu = spam * eggs
print(menu)
menu = spam / eggs
print(menu)
menu = spam - eggs
print(menu)


print('--------------- Challenge 3')
# Challenge 3: Combine (technically, "concatenate") username, separator, and
# title together using the "+" operator. Put the result into a variable
# called "message". Print the message.
username = 'King Arthur'
separator = ', '
title = 'who seeks the Holy Grail'
print(username + separator + title)


print('--------------- Challenge 4')
# Challenge 4: Uncomment the following lines (this means deleting the "#" at
# the beginning of the line). Each of the following lines have a mistake, which
# will cause the Python program to not even run (this is called a "syntax
# error"). Can you spot the mistakes that are causing them to break?

# Goal 1: Should print "It is a killer rabbit!"

rabbit_type = "killer"
print(f'It is a {rabbit_type} rabbit!')


# Goal 2: Should print "My favorite color is: Yellow"

favorite_color = "Yellow"
print(f'My favorite color is: {favorite_color}')


print('--------------- Challenge 5')
# Challenge 5: The following variables represent popular artists during the
# 80s, and the number of sales (in millions) of each artist's top album.
# Examine them.  Then, write code to do each of the following:

# Range:
# 1. Put the highest selling album into a variable called "highest_album"
# 2. Put the lowest selling album into a variable called "lowest_album"
# 3. Use print to show the difference of the two.

# Average:
# 1. Add together all the numbers into a variable called "total_sales"
# 2. Create a new variable called "count" and store in that variable the number
# of albums listed here (just write the number)
# 3. Use print to compute the average

bon_jovi = 12.9
bruce_springsteen = 15.9
michael_jackson = 29.0
prince = 13.6
dire_straits = 12.9
phil_collins = 13.8
ac_dc = 19.1
whitney_houston = 14.2
guns_n_roses = 15.6
highest_album = michael_jackson
lowest_album = bon_jovi
print(
    f"The difference between the album sales of highest and lowest is: {highest_album-lowest_album}")
total_sales = bon_jovi+bruce_springsteen+michael_jackson+prince + \
    dire_straits+phil_collins+ac_dc+whitney_houston+guns_n_roses
count = 9
print(f"average sales per album: {total_sales/count}")


print('--------------- Challenge 6')
# Challenge 6:
# Can you write one line of code to make the variable "number" increment by
# one, e.g. increase its value by 1? Repeat this three times, and print the
# value of "number" after each time, so that it prints 11, 12, 13 on separate
# lines.
# HINT: Don't just assign the variable "number" equal to 3, but instead try
# assigning it to itself + 1.
number = 10
for _ in range(3):
    number += 1
    print(number)


print('--------------- Challenge 7')
# Challenge 7:
# Before you "uncomment" these lines, what do you think it will print out?
# Again, remember "=" is assignment, not equality.

a = 5
b = a
a = 3
print("I think it will print '5'")
print(b)
print(a == b)


print('--------------- Bonus Challenge')
# Bonus Challenge:
# Use "type" to figure out the data type of each variable. The first two are
# done for you in comments. The different variables here hold some of the most
# common data types in Python. Use a "," to print multiple things on one line.
questions_remaining = 3
name = 'King Arthur'
average_velocity_of_swallow = 38.6243
is_parrot_dead = True
cheese_left_in_shop = None

print("Type of questions_remaining: ", type(questions_remaining))
print("Type of name: ", type(name))
print("Type of cheese_left_in_shope: ", type(cheese_left_in_shop))


print('---------------')
# Advanced Bonus Challenge 1: Unpacking Assignment
# The following Bonus Challenges are beyond what we have taught in Python, and
# include concepts that we will only teach later. Only spend time on them if
# you are looking for a greater challenge!

# Uncomment the following lines and use print to output the contents of the
# variables to get an idea of what is happening.
# a, b = 1, 2
# name = "Dominic Monaghan"
# first_name, last_name = name.split()
# name = "Dominic Bernard Patrick Luke Monaghan"
# first_name, *middle_names, last_name = name.split()


# Advanced Bonus Challenge 2: Advanced Unpacking Assignment
# Uncomment the following lines. Only by replacing the ?????????, make the
# following print statement print out 0, 1, 2, 3, 4, 5, 6, 7
nested = (0, (1, (2, 3), 4, 5), 6, 7)
a, (b, (c, d), e, f), g, h = nested
print(a, b, c, d, e, f, g, h)

# Final question: Do you think this advanced unpacking is "Pythonic" or not?
