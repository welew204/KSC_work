# This file contains the solutions to the first 7 challenges for this activity

from django.urls import path
from django.http import HttpResponse, HttpResponseRedirect


def index(request):
    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Game of Thrones Fan Page</h1>
        <a href="/vote/">Vote on your favorite house</a> <br />
        <hr />
        <a href="/my-favorite-characters">My favorite GoT characters</a> <br />
        <a href="/top-episodes">Top GoT Episodes</a> <br />
    ''')


def characters(request):
    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>My favorite Game of Thrones Characters</h1>
        <ul>
            <li>Daenerys Targaryen</li>
            <li>Jon Snow</li>
            <li>Tyrion Lannister</li>
            <li>Arya Stark</li>
        </ul>
        <hr />
        <a href="/">Back to home page</a>
    ''')


def favorite_episodes(request):
    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Top 3 episodes</h1>
        <ol>
            <li>Season 2 Episode 9: Blackwater</li>
            <li>Season 3 Episode 9: The Rains of Castamere</li>
            <li>Season 4 Episode 9: The Watchers on the Wall</li>
        </ol>
        <hr />
        <a href="/">Back to home page</a>
    ''')

# Challenge 5: A dictionary to hold the votes.
votes = {
    'stark': 0,
    'lannister': 0,
    'targaryen': 0,
}

# Challenge 3 - Create a new "view function" for the houses vote page
def houses_vote(request):
    # Challenge 6 - Display votes:
    votes_html = '<ul>'
    # C6: Convert the number to a string, then include into HTML
    votes_stark_number = votes['stark']
    votes_stark_string = str(votes_stark_number)
    votes_html += '<li><strong>Stark:</strong> ' + votes_stark_string + '</li>'
    # C6: Ditto, but for the other houses (and in one line each)
    votes_html += '<li><strong>Lannister:</strong> ' + str(votes['lannister']) + '</li>'
    votes_html += '<li><strong>Targaryen:</strong> ' + str(votes['targaryen']) + '</li>'
    votes_html += '</ul>'

    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Vote for your favorite GoT house</h1>
        <a href="/vote/house-stark">House Stark: Winter is coming!</a> <br/>
        <a href="/vote/house-lannister">House Lannister: Hear me roar!</a> <br/>
        <a href="/vote/house-targaryen">House Targaryen: Fire and blood!</a> <br/>
        <hr />

        <h2>Current vote totals:</h2>
        ''' + votes_html + '''
        <hr />
        <a href="/">Back to home page</a>
    ''')



def vote_stark(request):
    # Challenge 4 & 5 - Make vote counting pages
    votes['stark'] += 1
    #votes['stark'] = votes['stark'] + 1 # alternative syntax
    print('votes for stark:', votes['stark'])

    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />
        <h2>Your vote was recorded</h2>
        <hr />
        <a href="/vote/">Back to voting page</a>
    ''')


def vote_lannister(request):
    # Challenge 5 - Make vote counting pages
    votes['lannister'] += 1
    print('votes for lannister:', votes['lannister'])
    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />
        <h2>Your vote was recorded</h2>
        <hr />
        <a href="/vote/">Back to voting page</a>
    ''')


def vote_targaryen(request):
    # Challenge 7 - Use redirect for a cleaner experience
    votes['targaryen'] += 1
    print('votes for targaryen:', votes['targaryen'])
    return HttpResponseRedirect('/vote/')



urlpatterns = [
    path('', index),
    path('my-favorite-characters', characters),
    # Challenge 2: v-- Fixed this URL to match the A tag
    path('top-episodes', favorite_episodes),

    # Challenge 3 - Make a new path in the router to connect the URL with the
    # view function we created
    path('vote/', houses_vote),

    # Challenge 4 - Make vote counting pages
    path('vote/house-stark', vote_stark),
    path('vote/house-lannister', vote_lannister),
    path('vote/house-targaryen', vote_targaryen),
]


# Boilerplate -- Don't worry about understanding anything from here down
def main():
    import sys
    from django.conf import settings
    from django.core.management import execute_from_command_line

    settings.configure(
        DEBUG=True,
        ROOT_URLCONF=sys.modules[__name__],
    )

    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
