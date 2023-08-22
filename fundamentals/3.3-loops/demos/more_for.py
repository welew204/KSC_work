print('----------')
# Loop through numbers 0-9
for i in range(10):
    print(i)

print('----------')
# Loop through keys in a dictionary
team = {
    30: 'Stephen Curry',
    35: 'Kevin Durant',
    23: 'Draymond Green',
    11: 'Klay Thompson',
}

for number in team:
    name = team[number]
    print(name, 'has number', number)

print('----------')
# Alternate, cleaner way to loop through dictionary:
# Use "items()" method
for number, name in team.items():
    print(name, 'has number', number)


print('----------')
# Loop through multiples of 3 between 12 and 30
for i in range(12, 30, 3):
    print(i)


print('----------')
# Loop through words in a paragraph
paragraph = '''
    Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry,
    who was a farmer, and Aunt Em, who was the farmer's wife. Their house was
    small, for the lumber to build it had to be carried by wagon many miles.
    There were four walls, a floor and a roof, which made one room; and this
    room contained a rusty-looking cooking stove, a cupboard for the dishes, a
    table, three or four chairs, and the beds.
'''

paragraph_words = paragraph.split()
for word in paragraph_words:
    print(word)

