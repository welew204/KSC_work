from django.conf.urls.static import static
from django.conf import settings
from django.urls import path

import views

# In this example, we've separated out the views.py into a new file
urlpatterns = [
    path('', views.index),
    path('recipe-search/', views.recipe_search),
    path('github-api-example', views.github_api_example),
]

# Boilerplate to include static files
urlpatterns += static('static/', document_root=settings.STATIC_ROOT)
