# HINT 1: Lines starting with "#" are a comment
# HINT 2: Only do one challenge at a time! Save and test after each challenge.

# Challenge 1: Write Python code to print "Hello World!", save, and run it
print('Hello World!')

# Challenge 2:
# Expand it to print out the first stanza of the Jabberwocky Poem. There are
# two ways to do this, either using many print calls, or by using Python's
# "multi-line" strings, which are done with ''' (or """).
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
# Use a combination of print and arithmetic operators to print out the results
# of 3 different calculations. E.g., 2+2 could be one, but try getting more
# complicated!
print(2 + 2)
print(3 + 5)
print(100 * 5)

# Challenge 4:
# Try copying the following code, and remove the "#" from the beginning to
# transform it from being a comment:
#
#
# What is it doing? Can you modify it to print out the contents of one of the
# previous activities?

print(open('example_file.txt').read())

# Solution Example:
# print(open('3_github_challenge.md').read())


# ADVANCED CHALLENGE:
# 1. Write the code to print out the source code of this file.
# 2. Look up string methods for Python 3. See if you can combine the above code
# and use the "replace" method to print out the contents of this file, but with
# all mentions of the word "print" replaced with the word "echo"


# Solution Example:
# print(open('6_python.py').read().replace('print', 'echo'))


