def budget_animal_for_one_day(animal_name):
    print('How many', animal_name, 'does our zoo have?')
    animal_count = int(input('Count: '))
    print('And how many pounds of food does each eat per day?')
    food_count = int(input('Pounds: '))
    food_quantity = animal_count * food_count
    return food_quantity

def calculate_days(food_quantity):
    print('And for how many days are we budgeting?')
    day_count = int(input('Days: '))
    total_pounds = day_count * food_quantity
    print('Total pounds needed:', total_pounds)
    return total_pounds

def zoo_budgeter():
    print('--- ZOO FOOD BUDGET ---')
    animal_name = ''
    grand_total = 0
    while True: # Infinite loop, relies on "break" to stop
        print('Animal name?    (enter "quit" to stop)')
        animal_name = input('Name: ')
        if animal_name == 'quit':
            break
        food_quantity = budget_animal_for_one_day(animal_name)
        total_pounds = calculate_days(food_quantity)
        grand_total = grand_total + total_pounds
    print('Grand total:', total_pounds)

zoo_budgeter()
