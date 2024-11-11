from django.urls import path
from . import views

urlpatterns = [
    path('search/', views.hero_search, name='hero_search'),
]
