from django.urls import path
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse('<h1>Hello Django World!</h1>')

urlpatterns = [
    path('hello-world/', hello_world),
]

### Boilerplate
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

