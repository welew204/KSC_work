from django.urls import path

import views

urlpatterns = [
    path('', views.index),
    path('about-me', views.about_me),
    path('github-api-example', views.github_api_example),

    path('newstuff', views.newstuff),
]

# Boilerplate to include static files.
from django.conf import settings
from django.conf.urls.static import static
urlpatterns += static('static/', document_root=settings.STATIC_ROOT)

