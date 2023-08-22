# Random is part of the standard library.
# Traditionally, all imports go on top.
import random

houses = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin',
]

# random.shuffle randomizes a list
random.shuffle(houses)
print("Houses in random order:", houses)

# random.sample randomly grabs X number of things
quidditch_game_houses = random.sample(houses, 2)
print("Championship round is between:", quidditch_game_houses)

# random.randint picks a random number in a range
points = random.randint(10, 500)
print("Victor Krum scored this many points:", points)

# You can use it in a function, too
def sorting_hat():
    chosen_house = random.choice(houses)
    return chosen_house

hermiones_house = sorting_hat()
print("Hermione's House:", hermiones_house)



