from django.urls import path
from django.http import HttpResponse, HttpResponseRedirect
from django.template import Template, Context
from pprint import pprint

vote_counter = {
    'stark': 0,
    'lannister': 0,
    'targaryen': 0
}


def record_vote(house):
    vote_counter[house] += 1
    print(f"votes for {house}: ", vote_counter[house])
    pprint(vote_counter)


def index(request):
    print("running index")
    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Game of Thrones Fan Page</h1>
        <a href="/my-favorite-characters">My favorite GoT characters</a> <br />
        <a href="/top-episodes">Top GoT Episodes</a> <br />
        <a href="/vote/">VOTE!</a> <br />
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


def vote(request):
    response_template = Template('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />
        <h1>Vote for your favorite GoT house</h1>
        {% for house, count in votes.items %}
            <a href="/vote/register-vote/?house={{ house }}">House {{ house|capfirst }}</a> <br/>
        {% endfor %}
        <hr />
        <h2>Current Vote Counts</h2>
        {% for house, count in votes.items %}
            <p>House {{ house|capfirst }}: {{count}}</p>
        {% endfor %}
        
        <hr />
        <a href="/">Back to home page</a>
    ''')
    response_context = Context({'votes': vote_counter})

    return HttpResponse(response_template.render(response_context))


def register_vote(request):
    house_selected = request.GET['house']
    print(f'{house_selected} getting a vote')
    record_vote(house_selected)
    return HttpResponseRedirect('/vote/')


urlpatterns = [
    path('', index),
    path('my-favorite-characters', characters),
    path('top-episodes', favorite_episodes),
    path('vote/', vote),
    path('vote/register-vote/', register_vote),
]


# Boilerplate -- Don't worry about understanding anything from here down
def main():
    import sys
    from django.conf import settings
    from django.core.management import execute_from_command_line

    settings.configure(
        DEBUG=True,
        ALLOWED_HOSTS=['*'],
        SECRET_KEY='rre1h#l@&z!zcbg',
        ROOT_URLCONF=sys.modules[__name__],
        TEMPLATES=[{
            'BACKEND': 'django.template.backends.django.DjangoTemplates'}]
    )

    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
