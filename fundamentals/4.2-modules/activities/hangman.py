# GAME PLAY:
# - random word repr w/ underscores
# - take input from user for letter guess (ensure it's only one letter)
# - respond to correct/incorrect guesses
# - restart when all guess have been used (win or lose)


def hangman():
    # 'word' needs to be replaced w/ random word generator :)
    word = "geezer"
    blanks = " ".join(['_' for i in range(len(word))])
    guessed_letter = {}
    guessed_word = ''
    guesses = 0
    print('Welcome to Hangman!')
    print('-------------------')
    print("Below is the (blank) word you're trying to guess...good luck!")
    while guesses < len(word):
        print(blanks)
        g = input("Guess a letter... ")[0].lower()
        if g in guessed_letter.keys():
            print("Oops, you already guessed that letter; try again...")
            continue
        start = 0
        g_indexes = []
        while start < len(word):
            index = word.find(g, start)
            if index == -1:
                break
            else:
                guessed_letter[g] = True
                g_indexes.append(index)
                start = index + 1
        if g_indexes != []:
            for i in g_indexes:
                blanks = blanks[:i*2] + g + blanks[i*2+1:]
            if '_' not in blanks:
                print(f"You've won! Way to go guessing: '{word.upper()}'")
                return
        else:
            guessed_letter[g] = False
            guesses += 1
    print("Too bad! Out of guesses...want to play again?")
    ans = True if input("?")[0].lower() == 'y' else False
    if ans:
        hangman()


hangman()
