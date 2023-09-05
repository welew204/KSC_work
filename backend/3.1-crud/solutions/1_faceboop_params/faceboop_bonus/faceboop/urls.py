"""faceboop URL Configuration

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
from django.urls import path, include

from wall import views

urlpatterns = [
    path('', views.homepage, name="home"),
    path('user/<the_username>/', views.user_feed, name="user_feed"),
    path('users/', views.all_users, name="all_users"),
    path('city/<slug:city_name_slug>/', views.view_city, name="view_city"),
    path('admin/', admin.site.urls),

    path('user-by-id/<int:user_id>/', views.user_feed_by_id),

    # Bonus challenge solutions:
    path('accounts/', include('django.contrib.auth.urls')),
    path('bonus/user/', views.bonus_user_feed),
    path('bonus/user/<username>/', views.bonus_user_feed),
]
