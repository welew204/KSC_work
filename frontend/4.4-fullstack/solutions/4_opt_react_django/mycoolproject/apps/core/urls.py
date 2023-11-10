from django.urls import path, re_path

from apps.core import views

handler404 = lambda request, e: views.react_app(request)

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    # Challenge 4
    path('app/', views.react_app),

    # Challenge 5
    path('api/just/testing/', views.example_api_view),
]
