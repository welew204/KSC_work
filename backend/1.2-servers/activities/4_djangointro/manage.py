from django.urls import path
from django.http import HttpResponse
import random


# View -- This function, called a "view", is the function that will accept an
# incoming request, and return a response. In this case, it is just sending
# back a message in large fonts, but any logic can go in here to conditionally
# send back any sort of response.
def hello_world(request):
    # <--- HINT: Challenge 2 goes here
    print("--- viewing hello world")
    response = """<h2>Go to:</hr>
<a href="/about-me/">About Me</a>
<a href="/magik8/">Magik 8</a>"""
    return HttpResponse('<h1>Hello Django World!</h1>'+response)


def about_me(request):
    print("--- viewing about-me")
    response = """<h2>Go to:</hr>
<a href="/hello-world/">Hello World</a>
<a href="/magik8/">Magik 8</a>"""
    return HttpResponse('<h1>About me!</h1>'+response)


def magic_8_ball(request):
    messages = [
        'You bet',
        'Future looks good',
        'Not likely',
        'Impossible',
    ]
    print("...picking a new random message :)")
    message = random.choice(messages)
    response = """<h2>Go to:</hr>
<a href="/hello-world/">Hello World</a>
<a href="/about-me/">About Me</a>"""
    return HttpResponse('<h1>8 ball says: ' + message + '</h1>' + response)


# Routing -- This list is the list of "URL patterns" that Django will try, in
# order, in order to match the incoming request to a function that will handle
# it and return a response.
urlpatterns = [
    # <--- HINT: One part of Challenge 3 goes here
    path('hello-world/', hello_world), path('about-me/', about_me), path('magik8/', magic_8_ball)]


# Boilerplate -- Don't worry about understanding anything from here down -- we
# won't be doing stuff this way in the future anyway
def main():
    import sys
    from django.conf import settings
    from django.core.management import execute_from_command_line
    settings.configure(
        DEBUG=True,
        SECRET_KEY='rre1h#l@&z!zcbg',
        ROOT_URLCONF=sys.modules[__name__],
    )
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
