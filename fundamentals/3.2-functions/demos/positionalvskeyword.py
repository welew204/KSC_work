# KEYWORD ARGUMENTS vs
# POSITIONAL ARGUMENTS

###### keyword arguments
def greet_person(name="Joanne"):
    print('Hi', name)

# Prints "Hi Jane"
greet_person('Jane')

# Prints "Hi Joanne", since
# the keyword was not specified
# and so it goes to the default
greet_person()

###### positional arguments
def greet_person(name):
    print('Hi', name)


# Prints "Hi Jane"
greet_person('Jane')

# Causes error, since positional
# arguments are required:
greet_person()


