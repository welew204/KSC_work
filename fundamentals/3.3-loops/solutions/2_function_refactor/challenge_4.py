def get_measurement():
    value = input('? ')
    while not value.isnumeric():
        print('Please enter an integer number.')
        value = input('? ')
    integer_value = int(value)
    return integer_value

def main():
    print('Cosplay time! Enter measurements for costume.')

    print('Enter the bust or chest measurement:')
    bust = get_measurement()

    print('Enter the waist measurement:')
    waist = get_measurement()

    print('Enter the hip measurement:')
    hip = get_measurement()

    print('Enter the height (hollow to hem) measurement:')
    height = get_measurement()

    print('----------------')
    print('Great job! Your measurements are:')
    print('Bust:', bust)
    print('Waist:', waist)
    print('Hips:', hip)
    print('Height:', height)
    print('Have fun cosplaying!')

main()
