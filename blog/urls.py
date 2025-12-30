from django.urls import path
from . import views

urlpatterns = [
    path('blog/', views.blog, name='blog'),
    path('blog/<int:id>/', views.blog_detail, name='blog_detail'),
    path('blog/edit/<int:id>/', views.blog_edit, name='blog_edit'),
]