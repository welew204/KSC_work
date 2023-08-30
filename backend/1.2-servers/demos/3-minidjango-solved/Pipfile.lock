from django.urls import path
from django.http import HttpResponse

def index(request):
    return HttpResponse('''
        <h1>Welcome to my home page!</h1>
        <a href="/about-me">About me</a> <br />
        <a href="/contact">Contact me</a> <br />
    ''')

def about_me(request):
    return HttpResponse('''
        <h1>About me</h1>
        <p>My name is Ash Ketchum</p>
        <p>I have a Pikachu</p>
    ''')

def contact_me(request):
    return HttpResponse('''
        <h1>Contact</h1>
        <form method="POST" action="/contact">
            <input name="myname" placeholder="Your name" />
            <button>Submit</button>
        </form>
    ''')

urlpatterns = [
    path('', index),
    path('about-me', about_me),
    path('contact', contact_me),
]


# Boilerplate
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

