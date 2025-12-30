from django.shortcuts import render
from django.conf import settings
# Create your views here.

def menu_view(request):
    return render(request, 'home.html', {
        'media_url': settings.MEDIA_URL
    })