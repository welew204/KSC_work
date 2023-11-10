# To run this file: python3 server.py

import json
import io
import sys

# Bottle.py is a simple Python framework for writing web-servers.  It's
# feature set is roughly comparable to Express.js.  Compared to Django, the
# most popular Python web framework, bottle.py is both much less known, and
# much simpler.

# For this activity, we are using it just to make an extremely simple backend
# in Python, without having to have a lot of file.
from bottle import route, run, request

# Load some movies from IMDB from the JSON file. This "simulates" a database.
movies = json.load(open('movie_data.json'))


@route('/api/all')
def index():
    return {
        'movies_count': len(movies),
        'movies': movies,
    }


@route('/api/search/<search_term>')
def index(search_term):
    search_term = search_term.lower()
    # print(search_term, file=sys.stderr)
    # sys.stderr.write(search_term)
    return {
        'results': [
            movie for movie in movies
            if (search_term in movie.get('name', '').lower())
            or (search_term in movie.get('desc', '').lower())
        ],
    }


@route('/api/add/movie', method='POST')
def index():
    info = json.load(io.TextIOWrapper(request.body))
    movies.append(info)
    info['id'] = len(movies)  # Give the movie a "id"-like field

    # Save the new movie to file
    json.dump(movies, open('movie_data.json', 'w+'), indent=4)
    return {
        'success': True,
    }


# Kick off the bottle.py server
run(host='localhost', port=8080)
