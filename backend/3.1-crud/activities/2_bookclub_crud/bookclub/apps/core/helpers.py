# NOTE: Ignore this, only for Advanced Bonus Challenge

import requests

def get_book_cover_url_from_api(title, size='S'):
    '''
    Using the Open Library API, get the URL to the image of the first search
    result's book cover.

    >>> url = get_book_cover_url_from_api('Mockingjay', size='M')
    >>> url
    'http://covers.openlibrary.org/b/id/7460251-M.jpg'
    '''
    response = requests.get(f'http://openlibrary.org/search.json?title={title}&limit=1')
    data = response.json()
    if data['num_found'] > 0:
        cover_id = data['docs'][0]['cover_i']
        url = f'http://covers.openlibrary.org/b/id/{cover_id}-{size}.jpg'
    else:
        url = ''
    return url

