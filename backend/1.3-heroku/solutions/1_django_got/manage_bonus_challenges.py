# This file contains ONLY the solutions to the Bonus Challenge and the Advanced
# Bonus Challenge for this activity

import datetime
from django.urls import path
from django.http import HttpResponse
from django.template import Template, Context


def index(request):
    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Game of Thrones Fan Page</h1>
        <a href="/fanmail">Fan Mail</a> <br />
        <a href="/chat">GoT Chat</a> <br />
    ''')


messages = [] # Bonus Challenge - Part 2


def fanmail(request):

    # Bonus Challenge - Part 1
    message = request.POST.get('message')
    print('Fan-mail received:', message)

    name = request.POST.get('myname')
    print('Name received:', name)

    # Bonus Challenge - Part 2
    if name and message:
        message_dict = {
            'message': message,
            'name': name,
        }
        messages.append(message_dict)

    # Bonus Challenge - Part 3
    messages_html = '<ol>'
    for message in messages:
        messages_html += '<li>' + message['name'] + ': ' + message['message'] + '</li>'
    messages_html += '</ol>'

    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>Game of Thrones Fan Mail</h1>

    ''' + messages_html + '''

        <form method="POST">
            <input name="myname" placeholder="Your name" type="text" />
            <input name="message" placeholder="Your message" type="text" />
            <button>Submit</button>
        </form>

        <hr />
        <a href="/">Back to home page</a>
    ''')


## ADVANCED BONUS below
chat_messages = []

def chat(request):

    # Check if they have entered a username. If they haven't, display the "log
    # into the chatroom" screen.
    username = request.GET.get('username')
    if not username:
        # Not logged in, allow user to log in
        return HttpResponse('''
            <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

            <h1>GoT Fan Chat - Log-in</h1>
            <form method="GET">
                <input name="username" placeholder="Enter your username" type="text" />
                <button>Log-in</button>
            </form>
            <hr />
            <a href="/">Back to home page</a>
        ''')

    message = request.POST.get('message')
    if message:
        message_dict = {
            'message': message,
            'username': username,
            'time': datetime.datetime.now(),
        }
        chat_messages.append(message_dict)

    messages_html = ''
    for message in chat_messages:
        messages_html += (
            '<strong>' + message['username'] + '</strong> ' +
            '<small>' + str(message['time']) + '</small> ' +
            '<blockquote>' + message['message'] + '</blockquote>'
        )

    return HttpResponse('''
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" />

        <h1>GoT Fan Chat</h1>

        <div style="height: 400px; overflow-y: scroll">
            ''' + messages_html + '''
        </div>

        <form method="POST">
            <input name="message" placeholder="Your message" type="text" />
            <button>Submit</button>
        </form>

        <hr />
        <a href="/">Back to home page</a>
    ''')


urlpatterns = [
    path('', index),
    # Bonus Challenge: Make fanmail page
    path('fanmail', fanmail),
    # Advanced Bonus Challenge: Make Chat page
    path('chat', chat),
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
