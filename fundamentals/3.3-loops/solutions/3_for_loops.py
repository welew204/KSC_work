# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Challenge 1:
# Can you write the code to do a for-loop around "fave_things" printing out
# each item?

fave_things = [
    'cats',
    'doggos',
    'books',
]
for item in fave_things:
    print(item)


print('Challenge 2 -------------')
# Challenge 2:
# Uncomment the following code. Fix the typos!

for item in fave_things:
    print('i like', item)

for item in fave_things:
    print('i like', item)

for item in fave_things:
    print('i like', item)



print('Challenge 3 -------------')
grades = [
    91.4,
    85.3,
    95.0,
    33.5,
]
total = 0
for grade in grades:
    total += grade
print(total)

print('Challenge 4 -------------')
# Challenge 4:
data = [
    ["I'm a Believer", 'The Monkees'],
    ['Respect', 'Aretha Franklin'],
    ["(I Can't No) Satisfaction", 'The Rolling Stones'],
    ['Good Vibrations', 'The Beach Boys'],
    ['My Girl', 'The Temptations'],
    ["I Can't Stop Loving You", 'Ray Charles'],
    ["Blowin' in the Wind", 'Bob Dylan'],
]

for song, artist in data:
    print('Top hit from the 60s:', song, '... Artist:', artist)

# OR:
#for row in data:
#    song = row[0]
#    artist = row[1]
#    print('Top hit from the 60s:', song, '... Artist:', artist)


print('Challenge 5 -------------')
# Challenge 5:
data = [
    {
        'product_name': 'Nodular Coagulator',
        'supplier': 'Wisozk Inc',
        'quantity': 261,
        'unit_cost': '$10.47',
    },
    {
        'product_name': 'Juniperus Testator',
        'supplier': 'Keebler-Hilpert',
        'quantity': 292,
        'unit_cost': '$8.74',
    },
    {
        'product_name': 'Dextro Consolidator',
        'supplier': 'Schmitt-Weissnat',
        'quantity': 211,
        'unit_cost': '$20.53',
    },
]

total = 0
for datum in data:
    print('--- Product ---')
    print('Name:', datum['product_name'])
    print('Supplied by:', datum['supplier'])
    print('Available:', datum['quantity'], '(at', datum['unit_cost'], 'a piece)')
    print('---------------')

    # Bonus:
    unit_cost = datum['unit_cost']
    quantity = datum['quantity']
    unit_cost_as_float = float(unit_cost.strip('$'))
    total += quantity * unit_cost_as_float

print('Total value of inventory: $', total)


# OR, using f-strings
for datum in data:
    print(f'''--- Product ---
Name: {datum['product_name']}
Supplied by: {datum['supplier']}
Available: {datum['quantity']} (at {datum['unit_cost']} a piece)
---------------''')



print('-------------')
# Advanced Bonus Challenge
numbers = [
    1, 547, 100, 3123, 42, 12814, 42, 364, 317, 42, 38747, 213, 1, 42, 134,
    547, 213, 132.3, 904, 348, 12, 94, 238, 448,
]

counts = {
}

for item in numbers:
    if item not in counts:
        counts[item] = 0
    counts[item] += 1

top_count = 0
top_item = None
for item, count in counts.items():
    if count > top_count:
        top_item = item
        top_count = count

print('The mode is:', top_item)
print('It had', top_count, 'items')

# Advanced Challenge 2
# 1. "max" lets us get the maximum value in a list
# 2. Count lets us specify the calculation as to what we will be comparing for
# maximum (in this case, we'll be using the "count" function, one built into
# lists that counts the occurrences of an item within the list)
mode = max(numbers, key=numbers.count)
print('Mode (one liner):', mode)


# Another cool example of using max & the "key=" argument:
fruits = ['bananas', 'apples', 'pears']
longest_fruit = max(fruits, key=len)

# The "key=" argument is also supported in sort & sorted, which is super
# powerful:
sorted_by_length = sorted(fruits, key=len)
print(sorted_by_length)
