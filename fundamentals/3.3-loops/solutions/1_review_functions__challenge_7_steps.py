
# STEP-BY-STEP HINTS (Challenge 7):
#  1. This one might be tough! Start by uncommenting it and getting it working.
#     Most of the subsequent steps are refactors of the previous step (e.g.
#     behavior will not change, but code will be improved), so make sure you
#     run each step when you get to it.


answer = ''
while answer != 'quit':
    answer = input('Choice? ')


#  2. Then, refactor the working code into its own function, and add an
#     invocation for that function below its definition


def ask_question():
    answer = ''
    while answer != 'quit':
        answer = input('Choice? ')

print('Do you want to continue deleting your harddrive? [yes/no]')
ask_question()

#  3. Then, replace the "quit" hardcoded with a variable that gets assigned in
#     the function, but is still hardcoded as "quit"


def ask_question():
    expected_answer = 'quit'
    answer = ''
    while answer != expected_answer:
        answer = input('Choice? ')
print('Do you want to continue deleting your harddrive? [yes/no]')
ask_question()

print('Which color do you want your text? [red/green/blue]')
ask_question()


#  4. Then, "promote" the variable you made in step 3 into a parameter (still a
#     refactor: just move it from being declared by itself to being declared
#     within the parenthesis of the def statement)
#  5. Now, modify the invocation to modify the behavior to respond to other
#     than quit (e.g.  invoke it to use "stop" instead)


def ask_question(expected_answer='quit'):
    answer = ''
    while answer != expected_answer:
        print('Choose from:', expected_answer)
        answer = input('Choice? ')

print('Do you want to continue deleting your harddrive?')
ask_question(expected_answer='yes')

print('Which color do you want your text?')
ask_question(expected_answer='red')



#  6. Finally, change the "!=" on the while loop into an "in", in order to
#     check for inclusion instead of euqality, and change the string type to be
#     a list of strings, in order to allow more than one string to be compared.
#  7. Try invoking it now with ["stop", "quit", "end"] as all the valid
#     options.


# (First, using a string instead of a list)
def ask_question(expected_answer='quit'):
    answer = '----'
    while answer not in expected_answer:
        print('Choose from:', expected_answer)
        answer = input('Choice? ')


print('Do you want to continue deleting your harddrive?')
ask_question(expected_answer='yes,no')

print('Which color do you want your text?')
ask_question(expected_answer='red,green,blue')

# Issue with this solution: "yes,no" will count as valid, along with partial
# answers like "y" or "es,n" or whatever.
# SOLUTION: use a list, see below

def ask_question(expected_answer='quit'):
    answer = '----'
    while answer not in expected_answer:
        print('Choose from:', expected_answer)
        answer = input('Choice? ')
    return answer


print('Do you want to continue deleting your harddrive?')
choice = ask_question(expected_answer=['yes', 'no'])
if choice == 'yes':
    print('delete it all!')
else:
    print('okay, goodbye')

print('Which color do you want your text?')
choice = ask_question(expected_answer=['red', 'green', 'blue'])


