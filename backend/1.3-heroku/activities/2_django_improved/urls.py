# This file has the "routing" -- it associates "view functions" (found in
# views.py) with different paths.

from django.conf.urls.static import static
from django.conf import settings
from django.urls import path

import views

# In this example, we've separated out the views.py into a new file
urlpatterns = [
    path('', views.index),
    path('about-me', views.about_me),
    path('github-api-example', views.github_api_example),
    path('newstuff', views.newstuff),
]

# Boilerplate to include static files.
# Static files include CSS and images -- basically anything that isn't HTML or
# Python code -- stuff we just want to "serve up" for the browser to download
# and utilize and won't be changed by Python code (hence the term "static").
urlpatterns += static('static/', document_root=settings.STATIC_ROOT)
