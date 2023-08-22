print('-------------')
# Bonus Challenge 2:
# Remember the "locations" structure? Pseudocode, then write a while loop that
# keeps on asking for new locations, and adding them to the location structure,
# until the user tells it that the user wants to quit.

locations = []
while True:    # This will loop forever!
    enter_another = input('Enter a another location? (yes or no) ')
    if enter_another == 'no':
        print('Okay, quitting')
        print(locations)
        break
    elif enter_another != 'yes':
        print('Please say "yes" or "no"')
        continue

    name = input('Location name? ')
    latitude = float(input('Latitude? '))
    longitude = float(input('Longitude? '))
    review = input('Review? ')
    new_location = {
        'name': name,
        'latitude': latitude,
        'longitude': longitude,
        'review': review,
    }
    locations.append(new_location)

