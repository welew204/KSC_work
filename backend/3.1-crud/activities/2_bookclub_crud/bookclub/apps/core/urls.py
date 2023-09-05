from django.urls import path

from apps.core import views, bonus_activity_views

urlpatterns = [
    # CRUD views for Books
    path('', views.home, name='home'),
    path('book-create/', views.create_book),
    path('book-update/<book_id>/', views.update_book),
    path('book-delete/<book_id>/', views.delete_book),

    # CRUD views for Reading Lists
    # These are the views you'll be editing to create the Reading List CRUD
    path('reading-list/', views.reading_list_read),
    path('reading-list/list-create/', views.reading_list_create),
    path('reading-list/list-update/<list_id>/', views.reading_list_update),
    path('reading-list/list-delete/<list_id>/', views.reading_list_delete),

    # Bonus Activity Views -- ignore until you get to it
    path('reading-list/<list_id>/', bonus_activity_views.reading_list_details),
    path('reading-list/<list_id>/book-create/', views.reading_list_create_book),
    path('reading-list/<list_id>/book-update/<book_id>/',
         views.reading_list_update_book),
    path('reading-list/<list_id>/book-delete/<book_id>/',
         views.reading_list_delete_book),
]
