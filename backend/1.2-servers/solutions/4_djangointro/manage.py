import random

from django.urls import path
from django.http import HttpResponse
from django.template import Template, Context

# Our different "view" functions
def index(request):
    return HttpResponse('''
        <h1>Welcome to my home page!</h1>
        <a href="/about-me">About me</a> <br />
        <a href="/magic-8-ball">Magic 8 ball</a> <br />
        <a href="/contact">Contact me</a> <br />
    ''')

def about_me(request):
    return HttpResponse('''
        <h1>About me</h1>
        <p>My name is Ash Ketchum</p>
        <p>I have a Pikachu</p>
    ''')

def magic_8_ball(request):
    messages = [
        'You bet',
        'Future looks good',
        'Not likely',
        'Impossible',
    ]
    message = random.choice(messages)
    return HttpResponse('''
        <h1>Results:</h1>
        <h2>''' + message + '''</h2>
        <p><a href="/magic-8-ball">Try again</a></p>
    ''')

# BONUS CHALLENGE:
names = []
def contact_me(request):
    if 'name' in request.POST:
        names.append(request.POST['name'])

    template = Template('''
        <h1>Contact</h1>
        <ol>
            {% for user in guestbook %}
                <li>{{ user }}</li>
            {% endfor %}
        </ol>
        <form method="POST" action="/contact">
            <input name="name" placeholder="Your name" />
            <button>Submit</button>
        </form>
    ''')

    context = Context({
        'guestbook': names,
    })

    return HttpResponse(template.render(context))

# Routing: Set up which URLs we are looking at, with which functions will be
# called to handle this URL
urlpatterns = [
    path('', index),
    path('about-me', about_me),
    path('magic-8-ball', magic_8_ball),
    path('contact', contact_me),
]


# Boilerplate -- Don't worry about understanding anything from here down
def main():
    import sys
    from django.conf import settings
    from django.core.management import execute_from_command_line

    settings.configure(
        DEBUG=True,
        ROOT_URLCONF=sys.modules[__name__],
        TEMPLATES=[{
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
        }],
    )

    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()

