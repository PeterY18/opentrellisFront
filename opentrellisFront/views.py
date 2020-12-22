from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return HttpResponse("Hello, world. You're at the opentrellis index.")

def home(request):
    return render(request, 'opentrellisFront/home.html', {})

def learn(request):
    return render(request, 'opentrellisFront/learn.html', {})

def borrow(request):
    return render(request, 'opentrellisFront/borrow.html', {})

def invest(request):
    return render(request, 'opentrellisFront/invest.html', {})

def apply(request):
    return render(request, 'opentrellisFront/apply.html', {})

def legal(request):
    return render(request, 'opentrellisFront/legal.html', {})

def about(request):
    return render(request, 'opentrellisFront/about.html', {})

def team(request):
    return render(request, 'opentrellisFront/team.html', {})

def alumni(request):
    return render(request, 'opentrellisFront/alumni.html', {})