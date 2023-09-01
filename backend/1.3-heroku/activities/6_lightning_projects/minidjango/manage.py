# This is all boilerplate, don't touch this file for now!
import sys
import os
from django.conf import settings
from django.core.management import execute_from_command_line

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
print(BASE_DIR)

settings.configure(
    DEBUG=True,
    ROOT_URLCONF='urls',
    STATIC_URL='static/',
    ALLOWED_HOSTS=['*'],
    SECRET_KEY='w5$jdvegh2)!=ajh0!7em08!ly&vgg%&8n!z97appp902a)nnj',
    STATIC_ROOT=os.path.join(BASE_DIR, 'static'),
    # STATICFILES_DIRS=[os.path.join(BASE_DIR, 'static'),],
    INSTALLED_APPS=[
        'django.contrib.staticfiles',
    ],
    TEMPLATES=[{
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
    }],
)

execute_from_command_line(sys.argv)
