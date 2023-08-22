# Challenge 0: Remember, what's the first thing you should add to any Python
# file you are working with?
# (Answer: add a "print", to make sure you are editing the right file!)


print('--------------- Challenge 1')
# Challenge 1:
# Modify this list to be a list of your top 5 favorite animals. This can be
# done by following the pattern of 'kitty'.
favorite_animals_list = [
    'kitty',
    'dog',
    'cat',
    'parrot',
    'rat'
]


print('--------------- Challenge 2')
# Challenge 2:
# Use print statements, print each of your favorite animals on a separate line.
# Printing "kitty" is done for you, but commented out -- how will you print the
# others?
for animal in favorite_animals_list:
    print(animal)


print('--------------- Challenge 3')
# Challenge 3:
# Now it's time to write a dictionary! It should be just like the list, except
# with each "key" being the name of the animal, and each "value" being the
# noise that it makes. The first one (kitty) is done for you.
favorite_animals_dict = {
    'kitty': 'meow',
    'dog': "woof",
    'cat': 'purrrrr',
    'parrot': 'stepup??',
    'rat': '<squeek>'
}


print('--------------- Challenge 4')
# Challenge 4:
# Now, using the dictionary you made in challenge 3, print each animal name,
# followed by the noise it makes. Kitty is done for you, but "commented out".
#
# Hint: You can use "," in print to print multiple things on the same line

for k, v in favorite_animals_dict.items():
    print(f'{k[0].upper()+k[1:]} says: {v}')


print('--------------- Challenge 5')
# Challenge 5:
# Data types can be combined. Transform the following list into a dictionary
# where each key is the category of animal, and the values are the list of the
# animals that fall under that category.

animals = {'canines':
           ['dogs',
            'wolves',],
           'felines':
           ['cats', 'tigers'],
           'rodents':
           ['mice', 'hamsters', 'gerbils', 'capybaras'],
           'notochord retaining fish':
           ['hagfish', 'lamprey', 'coelacanth', 'sturgeon']}


# Advanced Bonus Challenges:
# This is a "code design" challenge. What type of container data-type would you
# use for each of the following scenarios? Create an variable with example data
# for each scenario.
#
# 1. File paths, e.g. for content for a static site generator
file_path_dict = {"path_name": "full_file_path"}
# 2. Translation of words from one language to another
word_translator_dict = {'word': 'translated'}
# 3. Dog breeds and their average longevity
dog_breed_longevity_dict = {'breed': int()}
# 4. Harder: Locations: Places in a mapping application like Google Maps or
locations_dict = {'location': {'latitude': float, 'longitude': float}}
#    Yelp, including their latitude and longitude and reviews
