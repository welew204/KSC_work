# REMINDER: Only do one challenge at a time! Save and test after every one.


# Challenges 1-4 have to do with data from Here is information about newspapers
# in Oakland, courtesy of Library of Congress' Chronicling America API.
#
# The URL that was used:
# chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json

import json
data = json.load(open('oakland_newspapers.json'))


print('Challenge 1 -------------')
# Challenge 1:
print(data['items'][0]['publisher'])
print(data['items'][0]['start_year'], data['items'][0]['end_year'])


print('Challenge 2 -------------')
# Challenge 2:
# Answer: The county is in a list of size 1.



print('Challenge 3 -------------')
# Challenge 3:
oakland_ca_newspapers = []
papers = data['items']
for paper in papers:
    if paper['county'][0] == 'Alameda':
        oakland_ca_newspapers.append(paper)


print('Challenge 4 -------------')
# Challenge 4:
valid_ca_newspapers = []
for paper in oakland_ca_newspapers:
    if paper['end_year'] != 9999:
        valid_ca_newspapers.append(paper)


print('Challenge 5 -------------')
# Challenge 5:
total = 0
for paper in valid_ca_newspapers:
    time_in_years = paper['end_year'] - paper['start_year']
    total += time_in_years
average = total / len(valid_ca_newspapers)
print('Average lifespan of newspapers:', average)


