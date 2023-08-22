import random

hipster_words_string = '''
    intelligentsia roof party pabst irony enamel pin flannel drinking vinegar
    chicken portland poke quinoa vinyl toast keytar scenester fixie umami
    bushwick chartreuse drinking vinegar craft beer kitsch distillery
    coldpressed pickled vaporware brooklyn organic authentic skateboard
'''
hipster_words_list = hipster_words_string.split()
word_to_guess = random.choice(hipster_words_list)

guessed_letters = []

def print_word():
    print('')
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
        guess = input('? ').strip()

        # Check to make sure guess is valid
        if not guess:
            continue  # skip to next for blank
        if len(guess) != 1:
            continue  # ensure only a single character
        if guess not in 'qwertyuiopasdfghjklzxcvbnm':
            continue  # ignore non alphabetical characters
        if guess in guessed_letters:
            continue

        guessed_letters.append(guess)
        if guess in word_to_guess:
            print('Correct!')
        else:
            print('Wrong!')
            wrong_guesses_left -= 1

        # check if all guessed using a trick with "sets"
        remaining_letters = set(word_to_guess) - set(guessed_letters)
        if not remaining_letters:
            # No more remaining letters, we win!
            print('You win!')
            print('The word was:', word_to_guess)
            return

    print('You lose!')
    print('The word was:', word_to_guess)

hangman()

