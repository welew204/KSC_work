

def trivia_stage_1():
    # This is the most basic stage: Just get one question working!
    answer = input('What is the capital of Laos? ')
    if answer == 'vientiane':
        print('You win!')
    else:
        print('You lose!')


def trivia_stage_2():
    # Now lets build it up... copy and paste code to get 2 questions
    # working. Then, we can identify a pattern and use either functions
    # or for loops to refactor.
    wrong_answers = 0
    answer = input('What is the capital of Laos? ')
    if answer == 'vientiane':
        print('Correct!')
    else:
        print('Wrong! The answer is: vientiane')
        wrong_answers += 1

    answer = input('What is the capital of Latvia? ')
    if answer == 'riga':
        print('Correct!')
    else:
        print('Wrong! The answer is: riga')
        wrong_answers += 1
    print('You got', wrong_answers, 'wrong out of 2')




def trivia_final():
    # Finally, refactor into this. Let's use a dictionary for the
    # countries and their answers.
    countries = {
        'Laos': 'Vientiane',
        'Latvia': 'Riga',
        'Lebanon': 'Beirut',
        'Lesotho': 'Maseru',
        'Liberia': 'Monrovia',
        'Libya': 'Tripoli',
        'Liechtenstein': 'Vaduz',
        'Lithuania': 'Vilnius',
        'Luxembourg': 'Luxembourg',
    }

    wrong_answers = 0
    # Let's use a for loop to go through all the countries, asking the
    # user for each one what is the capital.
    for country, capital in countries.items():
        answer = input('What is the capital of ' + country + '? ')

        # We use the string method ".lower()" to ensure that
        # capitalization (no pun intended!) differences won't mess up
        # the comparison. E.g., "RIGA" should be the same as "Riga"
        if answer.lower() == capital.lower():
            print('Correct!')
        else:
            wrong_answers += 1
            print('Wrong! The answer is:', capital)

    # Finally, report back to the user the results
    print('You got', wrong_answers, 'wrong out of', len(countries))


trivia_final()

