# REMINDER: Only do one challenge at a time! Save and test after every one.

# Challenge 0: Remember: Do the first thing for any Python activity.

print('HERE WE GOOOOOOOO!')
print('Challenge 1 -------------')
# Challenge 1:
# Write the code to "invoke" the function named challenge_1


def challenge_1():
    print('Hello Functional World!')


challenge_1()

print('Challenge 2 -------------')
# Challenge 2:
# 1. Uncomment the following code.
# 2. Many of these functions and invocations have typos or mistakes. Fix all
# the mistakes and typos to get the code running.
# 3. When running correctly, it should print a, b, c, and d on separate lines.


def func_1():
    print("a")


def func_2():
    print("b")


def Func_3():
    print("c")


def func_4():
    print("d")


func_1()
func_2()
Func_3()
func_4()


print('Challenge 3 -------------')
# Challenge 3:
# 1. Uncomment the following code. What does it do?
# 2. Notice how repetitive it is. Your task is to "refactor" it to be less
# repetitive. This will require putting the repetitive bits of the code into a
# new function of your creation, then invoking the function in lieu of
# repeating the code.

print("We need to ask your name 3 times.")
# name = input('What is your name? ')
# print("Hi", name)
# print("And one more time....")
# name = input('What is your name? ')
# print("Hi", name)


def challenge_3():
    name = input('What is your name? ')
    print("Hi", name)


challenge_3()
challenge_3()
challenge_3()


print('Challenge 4 -------------')
# Challenge 4:
# 1. Uncomment the following code. Inspect it closely. What does it do?
# 2. You will need to add an invocation to get it to work. Add an invocation so
# that the game "starts in the bedroom". Hint: bedroom()
# 3. Follow the same pattern to add a function that includes a hallway scene.


def bedroom():
    print('You are in a bedroom. A window is open and the sun is shining in.')
    print('There is a cell phone, resting on top of a chest of drawers.')
    print('north: Hallway')
    print('south: Bathroom')
    choice = input('? ')
    if choice == 'north':
        hallway()
    elif choice == 'south':
        bathroom()
    else:
        bedroom()


def bathroom():
    print('You are in a small bathroom. Everything is sparkling clean, except')
    print('there is toothpaste smeared on the counter. One small window lets')
    print('a bright beam of sunshine in.')
    print('north: Bedroom')
    choice = input('? ')
    if choice == 'north':
        bedroom()
    else:
        bathroom()


def hallway():
    print('You are in a narrow hallway. The walls are painted in bright, spongey yellow')
    print(' and there is phone in a small alcove about three feet away. ')
    print("There's a bloody knife on the floor.")
    print('south: Bedroom')
    choice = input('? ')
    if choice == 'south':
        bedroom()
    else:
        bathroom()


# bedroom()


print('-------------')
# Bonus Challenge:
# 1. Make it so that you can pick up the phone while in the bedroom with a
# command "take phone".
# 2. Once picked up, make it so that the phone will "start ringing" after
# traveling to a few different rooms.

# HINT: You will probably need to use a variable to mark that the user has
# picked up the phone. For this, look up the "global" keyword in Python, it
# might come in handy, as it allows functions to share variables.
