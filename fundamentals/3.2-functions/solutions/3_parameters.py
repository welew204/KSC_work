# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Challenge 1:
# Write the code to "invoke" the function named challenge_1, providing a name.

def challenge_1(name=None):
    print('Hello', name, '!')
challenge_1(name='Jack')


print('Challenge 2 -------------')
# Challenge 2:
# Uncomment the following code. Many of these functions and invocation have
# typos or mistakes. Fix all the mistakes and typos to get the code running.
# When running correctly, it should print dialog from a popular movie.

def func_1(name=None):
    print(name, ':', "I can't feel my body")

def func_2(name=None, other_name=None):
    print(name, ':', other_name, ', listen to me!')

def func_3(quality='best', item='burrito'):
    print('Winning that', item, 'was the', quality, 'thing.')

def func_4(name=None, phrase=None):
    print(name, ':', 'I promise.', phrase, ', Jack.', phrase)


func_1(name='Rose')
func_2(name='Jack', other_name='Rose')
func_3(item='ticket')
func_4(name='Rose', phrase="I'll never let go")


print('Challenge 3 -------------')
# Challenge 3:
# Examine the function written that performs addition. Uncomment the code to
# invoke it. Write another invocation to test it out. Use a similar pattern for
# 5 other operations (subtraction, multiplication, division, exponentiation,
# and modulus)

def addition(a=0, b=0):
    print(a + b)

addition(a=10, b=15)
addition(a=1, b=15)

def subtraction(a=0, b=0):
    print(a - b)

subtraction(a=30, b=10)

def multiplication(a=0, b=0):
    print(a * b)

multiplication(a=5, b=3)

def division(a=0, b=0):
    print(a / b)

division(a=6, b=3)

def exponentiation(a=0, b=0):
    print(a ** b)

exponentiation(a=2, b=8)

def modulus(a=0, b=0):
    print(a % b)

modulus(a=100, b=3)


print('Challenge 4 -------------')
# Challenge 4:
# Write a function that has a parameter that accepts a list. Have it keep on
# asking for user input UNTIL that input is something within that list.
# HINT: You'll use "while", "input", and "in" (for checking inclusion within
# the list)

def asker(acceptable_options=[]):
    answer = None
    while answer not in acceptable_options:
        print('Choose from:', acceptable_options)
        answer = input('? ')

asker(acceptable_options=['yes', 'no', 'maybe', 'can you repeat the question'])





print('-------------')
# Bonus Challenge:
# Write a function that has a dict parameter that is a "menu" of options. This
# dict should have keys that consist of the text that can be entered, and
# values that consist of functions. When the person selects an item from the
# menu, it should execute that function.

def chooser(menu={}):
    answer = None
    while answer not in menu:
        print('Choose from:', menu.keys())
        answer = input('? ')
    func = menu[answer]
    func()


def example_option_1():
    print('option 1 was chosen')

def example_option_2():
    print('option 2 was chosen')

chooser(menu={
    'opt1': example_option_1,
    'opt2': example_option_2,
})


