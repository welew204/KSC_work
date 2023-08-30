import requests

page = 0
count_per_page = 4

search_term = 'earthsea'
while True:
    action = input('search, next, previous, quit? ')

    if action == 'search':
        search_term = input('What search term? ')
        page = 0 # reset to first page
    elif action == 'quit':
        print('Goodbye!')
        break
    elif action == 'next':
        page += 1
    elif action == 'previous':
        page -= 1
        if page < 0:
            page = 0 # prevent from getting negative
    else:
        print('Please select a valid option')
        continue # restart loop


    offset = page * count_per_page
    url = (
        'http://openlibrary.org/search.json?' +
        'q=' + search_term +
        '&limit=' + str(count_per_page) +
        '&offset=' + str(offset)
    )
    response = requests.get(url)
    data = response.json()
    # print(data)
    max_pages = int(data['num_found'] / count_per_page)

    print('-')
    print('----------------------')
    print(search_term, '   - Page', page + 1, 'of', max_pages)
    print('-')
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
    print('----------------------')


