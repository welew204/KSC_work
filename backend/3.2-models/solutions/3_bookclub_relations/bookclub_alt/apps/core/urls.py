from django.urls import path

from apps.core import views

urlpatterns = [
    # CRUD views for Reading Lists
    path('', views.reading_list_home, name="home"),
    path('list/create/', views.reading_list_create),
    path('list/update/<list_id>/', views.reading_list_update),
    path('list/delete/<list_id>/', views.reading_list_delete),

    # CRUD views for editing books within reading lists
    path('list/<list_id>/', views.reading_list_details),
    path('list/<list_id>/book-create/', views.reading_list_create_book),
    path('list/<list_id>/book-update/<book_id>/', views.reading_list_update_book),
    path('list/<list_id>/book-delete/<book_id>/', views.reading_list_delete_book),

    # Voting on lists
    path('list/<list_id>/vote/up/', views.reading_list_vote_up),
    path('list/<list_id>/vote/down/', views.reading_list_vote_down),
]
