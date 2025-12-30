from django.shortcuts import render
from django.conf import settings
# Create your views here.

def education_view(request):
    return render(request, 'edu.html', {
        'media_url': settings.MEDIA_URL
    })


def certifocates_view(request):
    return render(request, 'certificates.html', {
        'media_url': settings.MEDIA_URL
    })


def work_view(request):
    return render(request, 'work.html', {
        'media_url': settings.MEDIA_URL
    })