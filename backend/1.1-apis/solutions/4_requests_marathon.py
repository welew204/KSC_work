import requests

print('------------ Challenge 1')
# Challenge 1
# Examine the following code. Can you understand what it is doing? As a
# hint, this is the code to use a Studio Ghibli API and fetch
# information about their films. Uncomment the print statement, and get
# it running.


response = requests.get('https://ghibliapi.herokuapp.com/films/')
data = response.json()
# print(data)

print('------------ Challenge 2')
# Challenge 2
# Write code to print out ONLY the "release_date" for "My Neighbor
# Totoro" from the list.
#
# Uncomment this code to get going.
for item in data:
    if item['title'] == 'My Neighbor Totoro':
        print('My Neighbor Totoro release date:', item['release_date'])


print('------------ Challenge 3')
# Challenge 3
# Read the API documentation for the Exchange Rates API provided by the
# European Central Bank. Information here: https://api.exchangerate.host/
# Print out the following information:

# 1. All top conversions between Euros and others
# 2. The cost of 1 USD in Euros today.
# 3. The cost of 1 Euros in USD on the last day of 2015: 2015-12-31
response = requests.get('https://kc-exchangeratesapi.herokuapp.com/latest')
data = response.json()
rates = data['rates']
for code, rate in rates.items():
    print(code, rate)

response = requests.get('https://kc-exchangeratesapi.herokuapp.com/latest?symbols=USD')
data = response.json()
usd_rate = data['rates']['USD']
print('USD rate', usd_rate)

response = requests.get('https://kc-exchangeratesapi.herokuapp.com/2015-12-31?symbols=GBP')
data = response.json()
gbp_rate = data['rates']['GBP']
print('EUR -> GBP rate on 2015-12-31: ', gbp_rate)


print('------------ (Skipping Challenges 4 & 5)')
# old_challenges()

print('------------ Challenge 6')
response = requests.get('http://openlibrary.org/search.json?q=lord+of+the+rings&limit=15&offset=0')
data = response.json()
for book in data['docs']:
    if book.get('author_name'):
        authors = ', '.join(book.get('author_name', []))
    else:
        authors = ' ?? UNKNOWN' # Some books have invalid authors!
    if book.get('publish_year'):
        year = book['publish_year'][0]
    else:
        year = '????' # Some books don't have valid publish years!
    print(year, ' - ', book['title'], 'by', authors)




# These are put into a function, below, since the domainsdb has been not
# working consistently
def old_challenges():
    print('------------ Challenge 4')
    results = requests.get('https://api.domainsdb.info/v1/domains/search?domain=ycombinator.com')
    # print(results)
    data = results.json()
    # print(data)
    country = data['domains'][0]['country']
    print('Country that ycombinator.com was registered in:', country)



    print('------------ Challenge 5')
    # Challenge 5
    # Write a script that uses this Registered Domain Name Search API to
    # look for free domain names with your first name, followed by the
    # following words, followed by '.com'
    words = [
        'dev',
        'coder',
        'hacker',
        'webdeveloperforhire',
    ]

    name = 'jane'
    free_domains = []
    for word in words:
        combo = name + word + '.com'
        try:
            results = requests.get('https://api.domainsdb.info/v1/domains/search?domain=' + combo)
            data = results.json()
            if 'domains' not in data:
                # If no 'domains' were included, this means none were found
                free_domains.append(combo)
        except Exception as e:
            # An error occurred -- in some versions of the API, this meant the
            # domain does not exist
            free_domains.append(combo)

    print('Free domains:', free_domains)

