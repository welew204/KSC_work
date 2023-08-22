

# Advanced Bonus Challenge:
# See if you can rewrite the bonus challenge from 2_functions.py using a class.
# Hint: Use a single class for "Location", then create many instances of that
# class for each location you can go.

inventory = []
class Location:
    def __init__(self, text, locations={}, items=[]):
        self.text = text
        self.locations = locations
        self.items = items

    def describe(self):
        print(self.text)
        for item in self.items:
            print('There is a', item, 'here.')
        for direction in self.locations:
            print(direction, self.locations[direction])

    def visit(self):
        answer = None
        while answer not in self.locations:
            self.describe()
            answer = input('Direction, or take, drop, or inventory? ')
            if answer.startswith('take'):
                verb, obj = answer.split()
                if obj in self.items:
                    inventory.append(obj)
                    self.items.remove(obj)
                else:
                    print("Can't find", obj)

            if answer.startswith('drop'):
                verb, obj = answer.split()
                if obj in inventory:
                    inventory.remove(obj)
                    self.items.append(obj)
                else:
                    print("Don't have", obj)

            if answer.startswith('inventory'):
                print('Inventory:', ', '.join(inventory))

        new_location_string = self.locations[answer]
        new_location = locations[new_location_string]
        new_location.visit()

locations = {
    'bedroom': Location(
        'You are in a bedroom. A window is open and the sun is shining in.',
        locations={
            'north': 'hallway',
            'south': 'bathroom',
        },
        items=[
            'phone',
            'book',
            'wallet',
        ],
    ),

    'bathroom': Location(
        'You are in a small bathroom. Everything is sparkling clean.',
        locations={
            'north': 'bedroom',
        },
        items=[
            'toothpaste',
            'brush',
            'glass',
        ],
    ),

    'hallway': Location(
        'You are in a narrow hallway. There is a locked door to the north.',
        locations={
            'south': 'bedroom',
        },
    ),
}

# To get it going!
locations['bedroom'].visit()

