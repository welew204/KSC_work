# Bonus Challenge:
# Write a function that calculates if a given value is a prime number. 

def is_prime(num):
    if num < 2:
        return False
    i = 2
    # Loop through all numbers up until num
    while i < num:
        # If evenly divisible, return False to exit the function right away,
        # saying that it found a prime number
        if num % i == 0:
            return False
        i += 1
    return True

print('Should not be prime:', is_prime(1))
print('Should be prime:', is_prime(2))
print('Should be prime:', is_prime(13))
print('Should not be prime:', is_prime(49))
print('Should not be prime:', is_prime(50))
print('Should be prime:', is_prime(1171))
print('Should not be prime:', is_prime(1179))


# We can speed up prime number checking by only going up to (and including) the
# square root of the number.
def faster_is_prime(num):
    if num < 2:
        return False
    i = 2
    while i <= num ** 0.5:
        if num % i == 0:
            return False
        i += 1
    return True


print('Should not be prime:', faster_is_prime(1))
print('Should be prime:', faster_is_prime(2))
print('Should be prime:', faster_is_prime(13))
print('Should not be prime:', faster_is_prime(49))
print('Should not be prime:', faster_is_prime(50))
print('Should be prime:', faster_is_prime(1171))
print('Should not be prime:', faster_is_prime(1179))


print('-------------')
# Advanced Bonus Challenge:
# Write a function that calculates the longest palindrome "sublist" within a
# list. A palindrome is the same backwards or forwards. In this case, a
# "sublist" is defined as a list found within another list.

def is_palindrome(input_list):
    i = 0
    length = len(input_list)
    while i < length / 2:
        # Check if index i  (counting from left) is not equal to index i
        # (counting from right). If they are not equal, then it is not a
        # palindrome, so we return False
        right_index = length - i - 1
        if input_list[i] != input_list[right_index]:
            return False
        i += 1

    # If it got through this, then it is a palindrome, and we can return True
    return True

def longest_palindrome(input_list):
    longest = []

    # This code looks at every possible sublist, checking if it is a
    # palindrome. If it is, then it checks if this palindrome is longer than
    # the previously discovered longest. If it is, then it marks it as the
    # longest so far discovered, and moves on.
    sublist_start = 0
    length = len(input_list)
    while sublist_start < length:
        sublist_end = sublist_start
        while sublist_end <= length:
            sublist = input_list[sublist_start:sublist_end]
            if is_palindrome(sublist):
                if len(sublist) > len(longest):
                    longest = sublist
            sublist_end += 1
        sublist_start += 1
    return longest

print(longest_palindrome(['a', 'b', 'c', 'b']), 'should be', ['b', 'c', 'b'])

print(
    longest_palindrome(['a', 'k', 'b', 'c', 'b', 'k', 'm', 'k']),
    'should be',
    ['k', 'b', 'c', 'b', 'k'],
)

print(longest_palindrome(['a', 'b', 'c']), 'should be', ['a'])




print('-------------')
# Advanced Pythonic rewrite:
def sublists_of(input_list):
    # Generator function to yield every possible sublist.
    for sublist_start in range(len(input_list)):
        for sublist_end in range(sublist_start, len(input_list) + 1):
            yield input_list[sublist_start:sublist_end]

def palindromic_sublists(input_list):
    # Generator function to yield every possible sublist
    for sublist in sublists_of(input_list):
        reverse = list(reversed(sublist))
        if reverse == sublist:
            yield sublist

def longest_palindrome_2(input_list):
    palindromes = list(palindromic_sublists(input_list))

    # This returns the "max" palindrome, as measured by the len function
    return max(palindromes, key=len)


print(longest_palindrome_2(['a', 'b', 'c', 'b']), 'should be', ['b', 'c', 'b'])

print(
    longest_palindrome_2(['a', 'k', 'b', 'c', 'b', 'k', 'm', 'k']),
    'should be',
    ['k', 'b', 'c', 'b', 'k'],
)

print(longest_palindrome_2(['a', 'b', 'c']), 'should be', ['a'])



# Note: We can rewrite the middle function even more tersely as a "one-liner"
# using Python's generator expression, and a trick with the slice syntax to
# reverse the list. However, this might be an ideal solution, since less is not
# always more.
def palindromic_sublists(input_list):
    return (sl for sl in sublists_of(input_list) if sl[::-1] == sl)
