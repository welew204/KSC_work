
# Refactoring function, with return values (output)
def main():
    print('Time to ask some questions.')

    name = input('What is your name? ')
    quest = input('What is your quest? ')

    print('Hi', name)
    print('Good luck with:', quest)


main()



# Refactoring function, with both input and output values
def main():
    print('Time to ask some questions.')

    thing = 'name'
    name = input('What is your ' + thing + '? ')
    thing = 'quest'
    quest = input('What is your ' + thing + '? ')

    print('Hi', name)
    print('Good luck with:', quest)


