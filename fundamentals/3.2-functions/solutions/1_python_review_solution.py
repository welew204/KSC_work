# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Challenge 1:
# Create 3 variables with your name, your favorite color, and how many hours of
# sleep you got last night. Print out all 3 values using "print".
name = 'Orlando Bloom'
favorite_color = 'Yellow'
how_much_sleep = 6
print('My name is', name, ' and I like the color', favorite_color)
print('I got ', how_much_sleep, 'hours of sleep last night.')

print('Challenge 2 -------------')
# Challenge 2:
# Create a list of your favorite authors.
authors_list = [
    'Douglas Adams',
    'Ursula Le Guin',
    'J.K. Rowling',
    'Mary Shelley',
    'Oscar Wilde',
]

print('Challenge 3 -------------')
# Challenge 3:
# Write an "if-statement" to check if the first author on that list is equal to
# "Douglas Adams". If it is, print "Don't panic!". Otherwise, print "Panic!"
if authors_list[0] == 'Douglas Adams':
    print("Don't Panic!")
else:
    print("Panic!")



print('Challenge 4 -------------')
# Challenge 4:
# Using a while loop, write code to "loop through" your favorite authors,
# printing each one on a separate line, along with its index
i = 0
length = len(authors_list)
while i < length:
    print(i, authors_list[i])
    i += 1



print('Challenge 5 -------------')
# Challenge 5:
# Using "input", create a while loop that keeps on looping until the user says
# "Stop". Have it print back whatever they say each time it loops.

answer = None
while answer != 'Stop':
    answer = input('Stop? ')
    print('You said: ', answer)





print('-------------')
# Bonus Challenge:
# Create a chat bot!
# Using a dictionary and a while / input loop, every time a user enters text
# check in the dictionary for a pre-set set of replies (e.g. "hi" responds with
# "hello"). 

replies = {
    'hello': 'hi',
    'hi': 'hi',
    'hey': 'hey you',
    'how are you?': 'i am okay....',
    'are you a robot?': 'OF COURSE NOT...  .....are you a robot?',
    'are you human?': 'OF COURSE...  .....are you a robot?',
    'no': 'sure.....',
    'yes': 'i thought so',
}

answer = None
while answer != 'goodbye' and answer != 'bye':
    answer = input('? ')
    if answer in replies:
        print(replies[answer])
    else:
        print('hmmm..')

