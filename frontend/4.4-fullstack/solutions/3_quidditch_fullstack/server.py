# "bottle.py" is a simple Python framework for writing web-servers. It does the
# same sorts of things as Django, except its much simpler and is only in one
# file.
from bottle import route, run, request

import json
import io


players = [
    {
        "name": "Angelina Johnson",
        "position": "Chaser",
        "house": "Gryffindor"
    },
    {
        "name": "Marcus Flint",
        "position": "Chaser",
        "house": "Slytherin"
    },
    {
        "name": "Zacharias Smith",
        "position": "Chaser",
        "house": "Hufflepuff"
    },
    {
        "name": "Roger Davies",
        "position": "Chaser",
        "house": "Ravenclaw"
    },
    {
        "name": "Fred Weasley",
        "position": "Beater",
        "house": "Gryffindor"
    },
    {
        "name": "Vincent Crabbe",
        "position": "Beater",
        "house": "Slytherin"
    },
    {
        "name": "Maxine O'Flaherty",
        "position": "Beater",
        "house": "Hufflepuff"
    },
    {
        "name": "Duncan Inglebee",
        "position": "Beater",
        "house": "Ravenclaw"
    },
    {
        "name": "Ronald Weasley",
        "position": "Keeper",
        "house": "Gryffindor"
    },
    {
        "name": "Miles Bletchley",
        "position": "Keeper",
        "house": "Slytherin"
    },
    {
        "name": "Herbert Fleet",
        "position": "Keeper",
        "house": "Hufflepuff"
    },
    {
        "name": "Grant Page",
        "position": "Keeper",
        "house": "Ravenclaw"
    },
    {
        "name": "Harry Potter",
        "position": "Seeker",
        "house": "Gryffindor"
    },
    {
        "name": "Draco Malfoy",
        "position": "Seeker",
        "house": "Slytherin"
    },
    {
        "name": "Cedric Diggory",
        "position": "Seeker",
        "house": "Hufflepuff"
    },
    {
        "name": "Cho Chang",
        "position": "Seeker",
        "house": "Ravenclaw"
    }
]

@route('/api/all')
def get_all():
    return {
        'players': players,
    }

def _get_available(position):
    return [
        player for player in players
        if player['position'] == position
        and not player.get('is_chosen')
    ]

def _get_chosen(position):
    return [
        player for player in players
        if player['position'] == position
        and player.get('is_chosen')
    ]

@route('/api/get/available/')
def get_available():
    return {
        'seekers': _get_available('Seeker'),
        'beaters': _get_available('Beater'),
        'chasers': _get_available('Chaser'),
        'keepers': _get_available('Keeper'),
    }

@route('/api/get/chosen/')
def get_chosen():
    return {
        'seekers': _get_chosen('Seeker'),
        'beaters': _get_chosen('Beater'),
        'chasers': _get_chosen('Chaser'),
        'keepers': _get_chosen('Keeper'),
    }

maximum_per_type = {
    'Chaser': 3,
    'Beater': 2,
    'Seeker': 1,
    'Keeper': 1,
}

@route('/api/choose/<name>/', method='POST')
def choose(name):
    found = None
    for player in players:
        if player['name'] == name:
            found = player

    if not found:
        return {
            'success': False,
        }

    found_position = found['position']
    max_count = maximum_per_type[found_position]
    chosen_players_of_same_position = _get_chosen(found_position)

    current_count = len(chosen_players_of_same_position)

    if current_count >= max_count:
        # Remove one
        chosen_players_of_same_position[0]['is_chosen'] = False

    found['is_chosen'] = True

    return {
        'success': True,
    }

run(host='localhost', port=8080)
