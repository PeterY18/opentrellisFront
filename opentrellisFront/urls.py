from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from . import views

urlpatterns = [
    path('opentrellis/', views.index, name='index'),
    path('', views.home, name='home'),
    path('learn/', views.learning, name='learning'),
    path('borrow/', views.lending, name='lending'),
    path('invest/', views.investing, name='investing'),
    path('apply/', views.apply, name='apply'),
    path('legal/', views.legal, name='legal'),
    path('about/', views.about, name='about'),
    path('team/', views.team, name='team'),
    path('alumni/', views.alumni, name='alumni'),
]

urlpatterns += staticfiles_urlpatterns()