# TODO a new function goes up here!

def get_measurement(measurement_area):
    print(f'Enter the {measurement_area} measurement:')

    value = input('? ')
    while not value.isnumeric():
        print('Please enter an integer number.')
        value = input('? ')
    integer_value = int(value)

    return integer_value


print('Cosplay time! Enter measurements for costume.')
bust = get_measurement('bust')
waist = get_measurement('waist')
hips = get_measurement('hips')
height = get_measurement('height')
print('----------------')
print('Great job! Your measurements are:')
print('Bust:', bust)
print('Waist:', waist)
print('Hips:', hips)
print('Height:', height)
print('Have fun cosplaying!')


def main():
    print('Cosplay time! Enter measurements for costume.')

    print('Enter the bust or chest measurement:')

    value = input('? ')
    while not value.isnumeric():
        print('Please enter an integer number.')
        value = input('? ')
    integer_value = int(value)

    bust = integer_value

    print('Enter the waist measurement:')

    value = input('? ')
    while not value.isnumeric():
        print('Please enter an integer number.')
        value = input('? ')
    integer_value = int(value)

    waist = integer_value

    print('Enter the hip measurement:')

    value = input('? ')
    while not value.isnumeric():
        print('Please enter an integer number.')
        value = input('? ')
    integer_value = int(value)

    hips = integer_value

    print('Enter the height (hollow to hem) measurement:')

    value = input('? ')
    while not value.isnumeric():
        print('Please enter an integer number.')
        value = input('? ')
    integer_value = int(value)

    height = integer_value

    print('----------------')
    print('Great job! Your measurements are:')
    print('Bust:', bust)
    print('Waist:', waist)
    print('Hips:', hips)
    print('Height:', height)
    print('Have fun cosplaying!')


# main()
