from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from . import views

urlpatterns = [
    path('opentrellis/', views.index, name='index'),
    path('', views.home, name='home'),
    path('learning/', views.learning, name='learning'),
    path('lending/', views.lending, name='lending'),
    path('investing/', views.investing, name='investing'),
    path('apply/', views.apply, name='apply'),
    path('received/', views.received, name='received'),
    path('legal/', views.legal, name='legal'),
    path('about/', views.about, name='about'),
    path('team/', views.team, name='team'),
    path('alumni/', views.alumni, name='alumni'),
]

urlpatterns += staticfiles_urlpatterns()