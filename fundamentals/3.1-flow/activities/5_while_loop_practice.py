# Challenge 0: Remember, to do the first thing for any Python activity!


print('------------- Challenge 1')
# Challenge 1:
# Try to predict what the following code will do. Uncomment it, and see if you
# got the prediction correct.

""" x = 0
while x < 10:
    print(x)
    x = x + 1 """


print('------------- Challenge 2')
# Challenge 2:
# Using a while loop, print out every odd number between 10 and 42.
""" odd = 10
while odd < 43:
    if odd % 2 == 1:
        print(odd)
    odd += 1 """


# Hint 1: Start by modifying Challenge 1 solution to print out all odd numbers
# under 10. It only requires changing 1 character to do this.
# Hint 2: Start every coding challenge with Pseudocode.
# Hint 3: The solution to this is no more complex than Challenge 1
x = 1
while x < 10:
    print(x)
    x = x + 2


print('------------- Challenge 3')
# Challenge 3:
# Background: "Factorial" is an operation in mathematics. A "factorial of a
# number" consists of multiplying all the numbers smaller than that number with
# each other. Examples:
# 5 factorial: 1 * 2 * 3 * 4 * 5
# 3 factorial: 1 * 2 * 3

# Write the pseudocode for a while loop that calculates the "factorial" of a
# number.
""" number = int(input('Gimme a number...'))
final_value = 1
while number > 0:
    final_value *= number
    number -= 1
print(final_value) """


print('------------- Challenge 4')
# Challenge 4:
# Examine the following commented out code. See if you can answer the following
# questions about it. Then, uncomment it and see if you are right.
# 1. What will cause this loop to stop?
# 2. Why does answer start as 'no'?

""" answer = 'no'
while answer == 'no':
    answer = input('Done yet? ') """


print('------------- Challenge 5')
# Challenge 5:
# Using the pseudocode from challenge 3, write the Python code to calculate the
# factorial of a number (such as 10).


print('-------------')
# Bonus Challenge 1:
# Running average utility! Your task is to create a loop that keeps on asking
# the user for a number, and maintains a running average of the values the user
# entered. Stop when the user enters 0.
#
# Hint 1: Start with pseudocode!
# Hint 2: The "running average" can be computed by summing the number they
# entered with the current running average, and dividing the result by "2"

number = int(input('gimme a number to add to your average...'))
grades = [number]
while number != 0:
    grades.append(number)
    current_avg = sum(grades) // len(grades)
    print(f"      Your current average is: {current_avg}")
    number = int(input("Ok, what's another number? "))


# Bonus Challenge 2:
# Remember the "locations" structure? Pseudocode, then write a while loop that
# keeps on asking for new locations, and adding them to the location structure,
# until the user tells it that the user wants to quit.
