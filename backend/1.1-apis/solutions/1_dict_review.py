# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Challenge 1:
# Holy nested-data-types batman! There are a lot of dicts and lists within each
# other here. Read through each challenge. Can you access each of the request
# items?

results = {
    'userCount': 76,
    'page': 1,
    'numberOfPages': 20,
    'users': [
        {
            'name': 'Monsieur Allen Issueplan',
            'position': {
                'org': 'Sock Studies Department',
                'role': 'Super-Emperor',
            },
            'personal': {
                'bio': 'Ronald Elmharvest needs ivory feet, badly.',
            },
            'contact': {
                'email': 'hogan-sausage+spam@one-hundred.blue',
                'phone': '1-604-555-5555',
                'location': 'Boardssound',
            },
            'account': {
                'withdrawn': 31644,
                'total': 62158,
            },
        },
        {
            'name': 'Father Kimmy Santiago',
            'position': {
                'org': 'The Canyon And Beef Pub',
                'role': 'Reverend',
            },
            'personal': {
                'bio': 'To get to North Stankonia, you go to Liverboot.',
            },
            'contact': {
                'email': 'king-jonathan-almondking+spam@chump.org',
                'phone': '864-70-555-9595',
                'location': 'Chumptown',
            },
            'account': {
                'withdrawn': 65972,
                'total': 91308,
            },
        },
        {
            'name': 'Dame Daniel Eathorse',
            'position': {
                'org': 'E-Cybersmell',
                'role': 'Major',
            },
            'personal': {
                'bio': 'I needs a container of lemon mugs, badly.',
            },
            'contact': {
                'email': 'ronald-cautious-staffs@bag-of-evil-jeans.sexy',
                'phone': '867-5309',
                'location': 'Dumptown',
            },
            'account': {
                'withdrawn': 68441,
                'total': 57680,
            },
        },
        {
            'name': 'Mary Bucket',
            'position': {
                'org': 'Faculty Of Applied Beef',
                'role': 'President',
            },
            'personal': {
                'bio': 'Intermove is the best company in Belliesshire.',
            },
            'contact': {
                'email': 'jerk@bag-of-flower-noses.wedding',
                'phone': '864-70-555-3333',
                'location': 'Grubberg',
            },
            'account': {
                'withdrawn': 23502,
                'total': 63002,
            },
        },
    ],
}

# 1. Print the name of 'Monsieur Allen Issueplan'
print(results['users'][0]['name'])

# 2. Print the name of 'Mary Bucket'
print(results['users'][3]['name'])

# 3. Print the phone number of 'Father Kimmy Santiago'
print(results['users'][1]['contact']['phone'])

# 4. Print the bio of Dame Daniel Eathorse
print(results['users'][2]['personal']['bio'])


print('Challenge 2 -------------')
# Challenge 2:
# Write a for-loop to print all the email addresses in the list.
for user in results['users']:
    print(user['contact']['email'])


print('Challenge 3 -------------')
# Challenge 3:
# Write a for-loop to sum the total account 'total' values for all users and
# print the result. Repeat for 'withdrawn'.
sum_total = 0
sum_withdrawn = 0
for user in results['users']:
    sum_total += user['account']['total']
    sum_withdrawn += user['account']['withdrawn']
print('sum total', sum_total)
print('sum withdrawn', sum_withdrawn)


print('Challenge 4 -------------')
# Challenge 4:
# Let's try list comprehension! List comprehension is an alternate syntax for
# for loops that makes modifying data and accumulating it in new lists (or
# dicts) a breeze, once you get the hang of the strange syntax. It's one of the
# language features that makes Python so great for data processing.
#
# Uncomment the following code. Can you figure out what it is doing? Get it to
# put all the phone numbers in a list, instead.

phone_numbers = [
    user['contact']['phone']
    for user in results['users']
]
print(phone_numbers)


print('Challenge 5 -------------')
# Challenge 5:
# Another list comprehension challenge, this time for dicts.
#
# Uncomment the following code. Can you figure out what it is doing? Get it to
# create a dictionary of all the organizations with an withdrawn total of great
# than 40000, containing the org as a key and the account withdrawn as the
# value.

orgs = {
    user['position']['org']: user['account']['withdrawn']
    for user in results['users']
    if user['account']['withdrawn'] > 40000
}
print(orgs)


print('-------------')
# Bonus Challenge 1:
# Can you use list comprehension and a built-in function to sum (hint hint) the
# account totals in one clean, readable <80 character line?
print(sum([user['account']['total'] for user in results['users']]))






print('-------------')
# Bonus Challenge 2:
# Try repeating your solution Bonus Challenge 1, but omitting the [] (if you
# haven't already). It will still work. Can you explain why? If you are
# stumped, look up "generator expressions". Can you contrast in your own words
# the functional difference between this syntax and the list comprehension
# syntax, and how they differ in performance and situation?

print(sum(user['account']['total'] for user in results['users']))

# Answer:
# - This is "generator expression syntax"
# - Generator expressions do not create intermediate lists, instead
# summing up the results "on the fly"
# - In performance, they are the same as writing this "by hand" with a
# loop, as no intermediate data structures are created.
# - This can be more efficient for large data sets.
# - It can be used in place of any variable or syntax that expects an
# iterator.
# - It cannot be used where a list or tuple is strictly expected, since
# it does not have a "length" (generators can go on forever, conceivably)


