print('--------------- Challenge 1')
# Challenge 1:
# Modify this list to be a list of your top 5 favorite types of animals
favorite_animals_list = [
    'kitty',
    'shiba',
    'hamster',
    'capybara',
    'pig',
]



print('--------------- Challenge 2')
# Challenge 2:
# Using print statements, print each of your favorite animals on a separate line
print(favorite_animals_list[0])
print(favorite_animals_list[1])
print(favorite_animals_list[2])
print(favorite_animals_list[3])
print(favorite_animals_list[4])


print('--------------- Challenge 3')
# Challenge 3:
# Now, remake the list as a dictionary containing the noise that each animal
# should make. E.g. for "kitty", it should be "meow"
favorite_animals_dict = {
    'kitty': 'meow',
    'shiba': 'wow',
    'hamster': 'squeek',
    'capybara': 'bark',
    'pig': 'oink',
}

print('--------------- Challenge 4')
# Challenge 4:
# Once again, print each animal name, followed by the noise it makes
print('Kitty says:', favorite_animals_dict['kitty'])
print('Shiba says:', favorite_animals_dict['shiba'])
print('Hamster says:', favorite_animals_dict['hamster'])
print('Capybara says:', favorite_animals_dict['capybara'])
print('Pig says:', favorite_animals_dict['pig'])




print('--------------- Challenge 5')
# Challenge 5:
# Data types can be combined. Transform the following list into a dictionary
# where each key is the category of animal, and the values are the list of the
# animals that fall under that category.

animals = {
    'canines': [
        'dogs',
        'wolves',
    ],

    'felines': [
        'cats',
        'tigers',
    ],

    'rodents': [
        'mice',
        'hamsters',
        'gerbils',
        'capybaras',
    ],

    'notochord retaining fish': [
        'hagfish',
        'lamprey',
        'coelacanth',
        'sturgeon',
    ],
}






# Bonus Challenge:
# This is a "code design" challenge. What type of container data-type would you
# use for each of the following scenarios? Create an variable with example data
# for each scenario.
#
# 1. File paths, e.g. for content for a static site generator
paths = [
    'path/to/file.txt',
    'another/path/to/file.txt',
]


# 2. Translation of words from one language to another
translation_cat_to_english = {
    'meow': 'Feed me!',
    'meow meow': 'More food human!!',
    'meowww': 'Okay done with food go away',
}


# 3. Dog breeds and their average longevity
dog_longevity = {
    'Dachshund': 13,
    'Mastiff': 10,
    'Pug': 13,
    'Shiba': 14,
    'Yorkie': 15,
}

# 4. Places in a mapping application like Google Maps or Yelp, including their
#    latitude and longitude and reviews
locations = [
    {
        'name': 'Sushi Burrito Palace',
        'latitude': 127.41,
        'longitude': 89.41,
        'review': [
            'I love it!',
            'Not great, had better',
        ],
    },
    {
        'name': 'Veggie Burger Land',
        'latitude': 127.43,
        'longitude': 86.01,
        'review': [
            'Ok',
        ],
    },
]


