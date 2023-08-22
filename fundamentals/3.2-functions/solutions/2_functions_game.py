print('Challenge 4 -------------')
# Challenge 4:
# Uncomment the following code for a text-based videogame. Try to analyze what
# it does. Can you get it working? Expand it to include a hallway scene.


print('-------------')
# Bonus Challenge:
# Make it so that you can take the phone while in the bedroom with a command
# "take phone", and once picked up. Once picked up, make it so that the phone
# will "start ringing" after traveling to a few different rooms. If you have
# more time... have that phone call begin a mystery puzzle!
# HINT: You will probably need to use variables to mark that you have the
# phone, among other things. Look the "global" keyword in Python, it might come
# in handy.

phone_call = 5
has_phone = False
def bedroom():
    global has_phone
    if has_phone:
        check_phone()

    print('You are in a bedroom. A window is open and the sun is shining in.')
    if not has_phone:
        print('There is a cell phone, resting on top of a chest of drawers.')
    print('north: Hallway')
    print('south: Bathroom')
    choice = input('? ')
    if choice == 'north':
        hallway()
    elif choice == 'south':
        bathroom()
    elif choice == 'take phone':
        has_phone = True
        bedroom()
    else:
        bedroom()

def bathroom():
    if has_phone:
        check_phone()

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
    if has_phone:
        check_phone()

    print('You are in a narrow hallway. There is a door locked to the north.')
    print('north: Locked door')
    print('south: Bedroom')
    choice = input('? ')
    if choice == 'south':
        bedroom()
    elif choice == 'north':
        print("Try as you may, you can't force the door open.")
        hallway()
    else:
        hallway()

def check_phone():
    global phone_call
    phone_call = phone_call - 1
    if phone_call == 0:
        print('The phone starts vibrating. Do you answer it?')
        choice = input('? ')
        if choice == 'yes':
            print()
            print('You answer the call. Your vision starts closing in.')
            print('You hear a grave voice from the phone rasp, "Now it begins..."')
            print('You black out.')
            print()
            print('To be continued!')
            print()
            print('------------------------------')

# To get it going!
bedroom()


