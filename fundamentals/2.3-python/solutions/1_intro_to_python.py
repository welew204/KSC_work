# Challenge 1: Write Python code to print 'Hello World!', save, and run it
print('Hello World!')

# Challenge 2:
print('’Twas brillig, and the slithy toves')
print('      Did gyre and gimble in the wabe:')
print('All mimsy were the borogoves,')
print('      And the mome raths outgrabe.')

# OR, using ''' ''', for multiple lines
print('''
’Twas brillig, and the slithy toves
      Did gyre and gimble in the wabe:
All mimsy were the borogoves,
      And the mome raths outgrabe.
''')



# Challenge 3:
# Use print + arithmetic operators to print out the results of 3 different
# calculations. E.g., print(2 + 2) could be one, but try getting more
# complicated!
print(2 + 2)
print(3000 / 2)
print(2 ** 10)
print((10 + 10 + 10 + 12) * 3)

# Challenge 4:
# - Try to guess why print('2 + 2') is different than print(2 + 2)
# - Try to guess why print('2' + '2') is different than print(2 + 2)
print('2' + '2')
print('2 + 2')

# BONUS CHALLENGE 1:
# Look up the 'format' method for Python. 'Uncomment' the following lines and
# modify each of them to say 'The answer is 42'.
print('The {} is {}'.format('answer', 42))
print('The {0} is {1}'.format('answer', 42))
print('The {1} is {0}'.format(42, 'answer'))
print('The {noun} is {number}'.format(noun='answer', number=42))

# BONUS CHALLENGE 2:
# Look up Formatted String Literals, only available in the latest
# versions of Python (3.6 and newer).  'Uncomment' the following line
# and add extra code to make it say 'The answer is 42'.
noun = 'answer'
number = 42
print(f'The {noun} is {number}')

# BONUS CHALLENGE 3:
# Look up the "older", %-based string interpolation for Python.
# 'Uncomment' the following lines and modify each of them to say 'The
# answer is 42'.
print('The %s is %i' % ('answer', 42))
print('The %(noun)s is %(number)i' % {'noun': 'answer', 'number': 42})
