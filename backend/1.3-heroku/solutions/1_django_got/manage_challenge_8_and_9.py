# This file contains ONLY the solutions to Challenge 8 and Challenge 9 for this
# activity

from django.urls import path
from django.http import HttpResponse
from django.shortcuts import redirect


def index(request):
    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Game of Thrones Fan Page</h1>
        <a href="/vote/">Vote on your favorite house</a> <br />
    ''')

votes = {
    'stark': 0,
    'lannister': 0,
    'targaryen': 0,
    # Challenge 9: Add more houses:
    'greyjoy': 0,
    'baratheon': 0,
    'tyrell': 0,
}

def houses_vote(request):
    # Not explicitly part of Challenge 8, but by using "f-strings", we can do
    # some simple templating to make our code cleaner
    votes_html = f'''
        <ul>
            <li><strong>Stark:</strong> {votes['stark']}</li>
            <li><strong>Lannister:</strong> {votes['lannister']}</li>
            <li><strong>Targaryen:</strong> {votes['targaryen']}</li>
        </ul>
    '''

    # For Challenge 8 we need to change the links to use the GET parameter
    # syntax in the URL: ?house=stark
    # This allows the register_vote view function to be more versatile and work
    # for any house.
    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Vote for your favorite GoT house</h1>
        <a href="/vote/register-vote/?house=stark">House Stark: Winter is coming!</a> <br/>
        <a href="/vote/register-vote/?house=lannister">House Lannister: Hear me roar!</a> <br/>
        <a href="/vote/register-vote/?house=targaryen">House Targaryen: Fire and blood!</a> <br/>
        <hr />

        <h2>Current vote totals:</h2>
        ''' + votes_html + '''
        <hr />
        <a href="/">Back to home page</a>
    ''')


def register_vote(request):
    # Challenge 8: Here we refactor to make it so that selected house comes
    # from GET parameters
    house_selected = request.GET['house']
    print('getting a vote for', house_selected)
    votes[house_selected] += 1
    return redirect('/vote/')


def houses_vote_challenge9(request):
    # In this version, we use for loops to generate the votes and the 

    # Generate the link and vote count HTML from the votes dictionary
    vote_html = '<ul>'
    for house_name, vote_count in votes.items():
        house_better = house_name.capitalize()
        vote_html += f'<a href="/vote/register-vote/?house={house_name}">{vote_count} - {house_better}</a><br />'
    vote_html += '</ul>'

    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Vote for your favorite GoT house</h1>
        ''' + vote_html + '''

        <hr />
        <a href="/">Back to home page</a>
    ''')


urlpatterns = [
    path('', index),
    #path('vote/', houses_vote),
    path('vote/', houses_vote_challenge9),
    path('vote/register-vote/', register_vote),
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
