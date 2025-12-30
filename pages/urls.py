from django.urls import path
from . import views

urlpatterns = [
    path('education/', views.education_view, name='education'),
    path('certificates/', views.certifocates_view, name='certificates'),
    path('work/', views.work_view, name='work'),
]