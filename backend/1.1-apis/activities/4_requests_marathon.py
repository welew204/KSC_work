# NOTE: With APIs, you are "at the whim" of the API provider, which means they
# can be shut down or changed with little warning. If you encounter such a
# problem with an API in this activity, be sure to let an instructor know!


import requests

print('------------ Challenge 1')
# Challenge 1
# Examine the following code. Can you understand what it is doing? As a
# hint, this is the code to use a Studio Ghibli API and fetch
# information about their films. Uncomment the print statement, and get
# it running.


response = requests.get('https://ghibliapi.herokuapp.com/films/')
# data = response.json()
# print(data)

print('------------ Challenge 2')
# Challenge 2
# Write code to print out ONLY the "release_date" for "My Neighbor Totoro" from
# the list.
#
# Uncomment this code to get going.
# for item in data:
#    print(item['title'])


print('------------ Challenge 3')
# Challenge 3
# Background: The European Central Bank provides real-time data on currency
# conversions. Read the API documentation for this Exchange Rates API:
#     https://kc-exchangeratesapi.herokuapp.com/
# Print out the following information:

# 1. All conversions between Euros and others
# 2. How many USD does one EUR buy today.
# 3. How many GPB does one EUR buy on the last day of 2015: 2015-12-31


print('------------ Challenge 4')
# NOTE: In 2021, the API used for this challenge has been off-and-on
# unavailable. Unfortunately there are no other free replacements, so if you
# are not getting any responses from it, feel free to skip these challenges,
# and instead skip to Challenge #6, a replacement challenge.


# Challenge 4
# DomainsDB.info is a site that looks up whether or not a domain name is
# registered.
# 1. Get it working using Python requests, and print the JSON results.
# 2. Try it out with other domain names
# 3. If you have extra time, can you figure out how to print ONLY the country
# that the domain was registered in? (and no other data)

# Hint: https://api.domainsdb.info/v1/domains/search?domain=ycombinator.com


print('------------ Challenge 5')
# Challenge 5
# Write a script that uses the Registered Domain Name Search API to look for
# *free domain* names with your first name, followed by the following words,
# followed by '.com'. For example, if your name was 'Joan', one might be
# 'joanhacker.com'.
#
# Hint: This is a tricky one! Experiment with different requests and see what
# results / errors / messages / etc you get back.

words = [
    'dev',
    'webdev',
    'pythonista',
    'coder',
    'hacker',
]


print('------------ Challenge 6')
# Challenge #6 - Replacing Challenge 4 & 5
# Open Library is a free book API, used to search for all types of information
# on published books.

# Here is a functioning REST API URL from openlibrary.org:
# http://openlibrary.org/search.json?q=earthsea&limit=10&offset=0
# Write code to do the following:

""" response = requests.get(
    'http://openlibrary.org/search.json?q=earthsea&limit=10&offset=0') """
# print(response.text)
to_search = 'Tin Drum'
# - Search for your favorite book title or genre
# - Get a total of 15 results
num_results = 15
# - Loop through the results, printing out the following information:
search_response = requests.get(
    'http://openlibrary.org/search.json?', params={'q': to_search, "limit": num_results})
data = search_response.json()
""" for doc in data['docs']:
    print("------------------")
    for key, val in doc.items():
        if key == "title":
            print("Title: ", val)
        elif key == "author_name":
            print("Author: ", val[0])
        elif key == "publish_year":
            print("Publish Years: ", val) """
#      1. Title
#      2. Author(s)
#      3. Publish Year(s)


print('------------')
# Bonus Challenge
# (continues from "Replacement Challenge")
# Here is a functioning REST API URL from openlibrary.org:
# http://openlibrary.org/search.json?q=earthsea&limit=10&offset=0

# - Write a Python program that uses this API to search for a given book title
# based on user input
# - Create a system using "input" and "while" to allow the user to "flip"
# through "pages" of 4 results each
run = True
while run == True:
    user_search = input(
        "What book title or author would you like to search for?  ")
    # - Loop through the results, printing out the following information:
    search_response = requests.get(
        'http://openlibrary.org/search.json?', params={'q': user_search})
    data = search_response.json()
    number_of_replies = len(data['docs'])
    number_of_pages = number_of_replies // 4 if number_of_replies % 4 == 0 else (
        number_of_replies//4)+1
    current_page = 1
    start_index = 0
    while True:
        view_string = f"""Search results for '{user_search} -- {number_of_replies} results' 
    Page {current_page} of {number_of_pages}
    -------------------
    """
        print(view_string)
        end_index = start_index + 4 if start_index + \
            4 < number_of_replies else number_of_replies-1
        for doc in data['docs'][start_index:end_index]:
            print(
                f"{doc['first_publish_year']} - {doc['title']}, by {doc['author_name'][0]}")
        user_response = input("ENTER: search, next, previous, quit  ")
        if user_response == "search":
            break
        elif user_response == "next":
            start_index += 4
        elif user_response == "previous":
            start_index -= 4 if start_index >= 4 else 0
        elif user_response == "quit":
            run = False
            break


# Example Usage:
# $ python3 4_requests_marathon.py
# What search term? Hunger Games
# Hunger Games    - Page 1 of 24
# -
# 1980  -  Hunger by Patricia Houck Sprinkle
# 2018  -  Hunger Games by Catherine Driscoll, Alexandra Heatwole
# 2012  -  The Hunger Games by Suzanne Collins
# 2013  -  Hunger Games : l'Embrasement by Scholastic Canada Ltd
# ----------------------
# search, next, previous, quit? next
# -
# ----------------------
# Hunger Games    - Page 2 of 24
# -
# 2012  -  The Hunger Games by Kate Egan
# 2011  -  The hunger games companion by Lois H. Gresh
# 2013  -  Hunger Games, catching fire by Kate Egan
# 2010  -  Hunger Games: Mockingjay by Suzanne Collins
# ----------------------
# search, next, previous, quit? quit
# Goodbye!


print('------------')
# Advanced Bonus Challenge:
# Take a look at: https://github.com/public-apis/public-apis
# Which of those public APIs could you get working using requests?
# If you found any really cool ones, show them off!
