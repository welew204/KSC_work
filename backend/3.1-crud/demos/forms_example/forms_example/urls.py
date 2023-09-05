"""forms_example URL Configuration

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

from dmv import views

urlpatterns = [
    path('', views.registration, name="homepage"),
    path('employees-only/', views.employees_only, name="employees_only"),
    path('delete/<registration_id>/', views.delete_registration),
    path('update/<registration_id>/', views.update_registration_street_address),
    path('admin/', admin.site.urls),
]
