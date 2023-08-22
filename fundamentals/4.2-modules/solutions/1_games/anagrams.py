# This is the minimum anagrams game
def anagrams_basic():
    import random
    word = ['t', 'r', 'i', 'c', 'y', 'c', 'l', 'e']
    random.shuffle(word)
    print('  '.join(word))
    guess = input('What word is this? ')
    if guess == 'tricycle':
        print('You win!')
    else:
        print('You lose.')



def anagrams_advanced():
    # This more advanced
    import random
    import sys
    import signal

    hipster_words_list = [
        'intelligentsia', 'roof', 'party', 'pabst', 'irony', 'enamel', 'pin',
        'flannel', 'drinking', 'vinegar', 'chicken', 'portland', 'poke',
        'quinoa', 'vinyl', 'toast', 'keytar', 'scenester', 'fixie', 'umami',
        'bushwick', 'chartreuse', 'drinking', 'vinegar', 'craft', 'beer',
        'kitsch', 'distillery', 'coldpressed', 'pickled', 'vaporware',
        'brooklyn', 'organic', 'authentic', 'skateboard',
    ]

    word = random.choice(hipster_words_list)
    letter_list = list(word)
    random.shuffle(letter_list)
    print('  '.join(letter_list))

    # This is code that uses the "signal" module to create a 5 second
    # timeout. That in turn will call sys.exit(0) causing it to quit.
    def anagrams_advanced_out_of_time(signum, frame):
        import sys
        print('The word was:', word)
        print('You lose!')
        sys.exit(0)

    signal.signal(signal.SIGALRM, anagrams_advanced_out_of_time)
    signal.alarm(5)
    while True:
        guess = input('What word is this? ')
        if guess == word:
            print('You win!')
            sys.exit(0)


anagrams_advanced()

