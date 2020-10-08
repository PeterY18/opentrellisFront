from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return HttpResponse("Hello, world. You're at the opentrellis index.")

def home(request):
    return render(request, 'opentrellisFront/home.html', {})

def learning(request):
    return render(request, 'opentrellisFront/learning.html', {})

def lending(request):
    return render(request, 'opentrellisFront/lending.html', {})

def investing(request):
    return render(request, 'opentrellisFront/investing.html', {})

def apply(request):
    return render(request, 'opentrellisFront/apply.html', {})

def received(request):
    return render(request, 'opentrellisFront/received.html', {})

def legal(request):
    return render(request, 'opentrellisFront/legal.html', {})