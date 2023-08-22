# "return" allows data to
# "escape" the function
def ask_for_name():
    print('Hi there!')
    name = input('Name? ')
    return name

# The function invocation
# gets "replaced" with the
# value of the return
their_name = ask_for_name()


# Alt use of return:
# Also allows exiting
# functions prematurely
def car_owner_survey():
    print('Own a car?')
    r = input('yes/no: ')
    if r == 'no':
        print('Goodbye.')
        return

    year = input('Year: ')
    mi = input('Miles: ')
    make = input('Make: ')
    # Etc..

car_owner_survey()

