"""dogsit URL Configuration

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

import debug_toolbar # Bonus Challenge #1
from django.urls import include, path # Bonus Challenge #1

from scheduling import views

urlpatterns = [
    path('', views.homepage),
    path('book/', views.book),
    path('list-sitter/', views.list_sitter),
    path('list-dog/', views.list_dog),
    path('admin/', admin.site.urls),

    # Bonus Challenge #1:
    path('__debug__/', include(debug_toolbar.urls)),
]
