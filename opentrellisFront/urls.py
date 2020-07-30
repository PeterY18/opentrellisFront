from django.urls import path

from . import views

urlpatterns = [
    path('opentrellis/', views.index, name='index'),
    path('', views.home, name='home'),
    path('learning/', views.learning, name="learning"),
    path('lending/', views.lending, name="lending"),
    path('investing/', views.investing, name="investing"),
    path('aboutus/', views.aboutus, name="aboutus"),
    path('team/', views.aboutus, name="team"),
    path('legal/', views.aboutus, name="legal"),

]