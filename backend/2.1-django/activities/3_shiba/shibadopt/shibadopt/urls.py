"""shibadopt URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from adoption import views

urlpatterns = [
    path('', views.homepage),
    path('adoption/', views.adoption),
    path('add-a-shiba/', views.add_a_shiba),
    # path('add-a-shiba/reverse/', views.reverse),
    path('admin/', admin.site.urls),
]
