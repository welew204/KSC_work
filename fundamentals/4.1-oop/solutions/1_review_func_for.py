# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Challenge 1:
# Examine the following function code. Can you write an invocation that will
# cause it to print the phrase: "Don't Stop Believin"?

def journey(verb, action='Do'):
    print(action, 'Stop', verb + 'in')
journey('Believ', action="Don't")



print('Challenge 2 -------------')
# Challenge 2:
# Examine the following code.
# 1. Replace the "pass" placeholder with code that will print out each line of
# the chorus.
# 2. Make this for-loop repeat three times, printing "Chorus 1", "Chorus 2",
# and "Chorus 3" before each time. You should do this by creating a new
# for-loop that contains the chorus for-loop. The outer for-loop should use the
# "range()" function to go through the numbers 1-3.

chorus = [
    "Don't stop believin'",
    "Hold on to the feelin'",
    "Streetlight people",
]

for i in range(1, 4):
    print('Chorus', i)
    for lyric in chorus:
        print(lyric)

print('Challenge 3 -------------')
# Challenge 3

band_info1 = {
    'label': 'Interscope Records',
    'formed': 1989,
    'disbanded': 1994,
    'city': 'San Francisco',
    'members': {
        'drums': 'Wanda Day',
        'guitar': 'Shaunna Hall',
        'bass': 'Christa Hillhouse',
        'vocals': 'Linda Perry',
    },
    'albums': [
        'Bigger, Better, Faster, More!',
        'Hello Mr. President',
    ],
    'videos': {
        1992: 'Dear Mr. President',
        1993: 'Spaceman',
        1994: 'Superfly',
    },
    'soundtracks': [
        "Wayne's World 2",
        'Airheads',
    ],
}

band_info2 = {}
band_info2['city'] = 'San Francisco'
band_info2['label'] = 'Interscope Records'
band_info2['formed'] = 1989
band_info2['disbanded'] = 1994

band_info2['members'] = {}
band_info2['members']['drums'] = 'Wanda Day'
band_info2['members']['guitar'] = 'Shaunna Hall'
band_info2['members']['bass'] = 'Christa Hillhouse'
band_info2['members']['vocals'] = 'Linda Perry'

band_info2['albums'] = []
band_info2['albums'].append('Bigger, Better, Faster, More!')
band_info2['albums'].append('Hello Mr. President')

band_info2['videos'] = {}
band_info2['videos'][1992] = 'Dear Mr. President'
band_info2['videos'][1993] = 'Spaceman'
band_info2['videos'][1994] = 'Superfly'

band_info2['soundtracks'] = []
band_info2['soundtracks'].append("Wayne's World 2")
band_info2['soundtracks'].append('Airheads')

if band_info1 == band_info2:
    print("Challenge 3 complete!")
else:
    print("Challenge 3 not yet done...")

print('Challenge 4 -------------')
# Challenge 4:
# Write a code that asks the user to enter a rock band. Then, use the
# dictionary to display the band's most famous song. HINT: Use "input" from
# previous activities.
# Optional: Make it into a while loop that keeps on asking, and "fails
# gracefully" if there is no band with that title

bands = {
    'Journey': "Don't Stop Believin'",
    'Bon Jovi': "Livin' On a Prayer",
    'Joy Division': 'Love Will Tear Us Apart',
    'Queen': 'Bohemian Rhapsody',
    '4 Non Blondes': "What's Up?",
    'Credence Clearwater Revival': "Fortunate Son",
}

while True:
    band_name = input('Band name? ')
    if band_name == 'quit':
        break
    if band_name not in bands:
        print('Could not find band:', band_name)
        continue
    print(band_name, 'wrote the hit', bands[band_name])





print('-------------')
# Bonus Challenge:
# The Fibonacci Sequence are the numbers where every number after the first two
# is the sum of the two preceding ones. For example:
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, etc.
# 1. Write a function that will calculate the nth Fibonacci number (where n is
# a parameter).
# 2. Come up with a "test plan" for this function.
#
# HINT: There are several distinct approaches to this. Get one working first
# before you think of others. One might use loops, another might use
# "recursion" (calling the same function within itself), and finally there is a
# way to approximate it using a formula.


def fibonacci_recursive(n, a=0, b=1):
    # "a" and "b" store the previous two numbers
    if n == 0:
        # If we've reached the end, we return the first accumulated number
        return a
    return fibonacci_recursive(n - 1, b, a + b)


def fibonacci_loop(n):
    # Set initial values
    a = 0
    b = 1
    for i in range(n):
        # Need to use a "tmp" variable while we are switching around values
        tmp = a
        a = b
        b = tmp + b
    return a


PHI = 1.61803398874989484820
def fibonacci_approximate(n):
    return int((PHI**n - (-1 / PHI)) / (5 ** 0.5))

print('Recursive:', fibonacci_recursive(5))
print('Looped:', fibonacci_loop(5))
print('Approx:', fibonacci_approximate(5))

# Spot check a few ones:
assert fibonacci_recursive(0) == 0
assert fibonacci_recursive(1) == 1
assert fibonacci_recursive(2) == 1
assert fibonacci_recursive(3) == 2
assert fibonacci_recursive(4) == 3
assert fibonacci_recursive(5) == 5

# Now check that up to 50 are the same with the different approaches
for i in range(50):
    assert fibonacci_recursive(i) == fibonacci_loop(i)
    assert fibonacci_recursive(i) == fibonacci_approximate(i)


