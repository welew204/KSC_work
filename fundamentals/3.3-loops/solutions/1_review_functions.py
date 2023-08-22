# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Challenge 1:
def lets_start():
    print('Time to code!')
lets_start()



print('Challenge 2 -------------')
# Challenge 2:
songs = [
    'Hey Jude',
    'Come Together',
    'I Want to Hold Your Hand',
    'Yellow Submarine',
    'Yesterday',
    'A Day in the Life',
    'Here Comes the Sun',
]

i = 0
length = len(songs)
while i < length:
    song = songs[i]
    print('Beatles song is: ', song)
    i += 1 # This was the line we needed!



print('Challenge 3 -------------')
# Challenge 3:
def greet(name):
    print('Hi', name)
greet('Shrek')
greet('Donkey')


print('Challenge 4 -------------')
# Challenge 4:
# Write a while loop that will count down from 100 to 48, by increments of 7
i = 100
while i > 47:
    print(i)
    i = i - 7

print('Challenge 5 -------------')
# Challenge 5:
# Write a while loop to look at each item in the list, and output each row.
data = [
    ["I'm a Believer", 'The Monkees'],
    ['Respect', 'Aretha Franklin'],
    ["(I Can't No) Satisfaction", 'The Rolling Stones'],
    ['Good Vibrations', 'The Beach Boys'],
    ['My Girl', 'The Temptations'],
    ["I Can't Stop Loving You", 'Ray Charles'],
    ["Blowin' in the Wind", 'Bob Dylan'],
]

i = 0
length = len(data)
while i < length:
    row = data[i]
    song_title = row[0]
    artist_name = row[1]
    print('Top hit from the 60s:', song_title, ' ... Artist:', artist_name)
    i = i + 1


print('Challenge 6 -------------')
# Challenge 6:
i = 1
two_next_time = True
while i < 11:
    print(i)
    if two_next_time:
        i = i + 2
        two_next_time = False
    else:
        i = i - 1
        two_next_time = True


print('Challenge 7 -------------')
# Challenge 7:
def asker(options):
    answer = None
    while answer is None or answer not in options:
        # HINT: The "*" spread-operator causes the list to "unpack" into the
        # print function invocation, which effectively makes it separated by
        # spaces
        print('Valid choices:', *options)
        answer = input('Choice? ')
    return answer
result = asker(['elvis', 'presley'])
print('You chose:', result)


print('-------------')
# Bonus Challenge:
word_to_guess = 'juxtaposition'
guessed_letters = []

def print_word():
    # We'll be learning about for-loops next!
    censored_word = ''
    for letter in word_to_guess:
        if letter not in guessed_letters:
            letter = '_'
        censored_word = censored_word + letter + ' '
    print(censored_word)

def hangman():
    wrong_guesses_left  = 5
    while wrong_guesses_left > -1:
        print_word()
        print('Guesses left:', wrong_guesses_left)
        print('Guessed letters:', *guessed_letters)
        guess = input('? ')
        if guess and guess not in guessed_letters:
            guessed_letters.append(guess)
            if guess in word_to_guess:
                print('Correct!')
            else:
                wrong_guesses_left -= 1

        # check if all guessed using a trick with "sets"
        remaining_letters = set(word_to_guess) - set(guessed_letters)
        if not remaining_letters:
            # No more remaining letters, we win!
            print('You win!')
            return

    print('You lose!')

hangman()

