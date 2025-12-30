from django.shortcuts import render, redirect
from .forms import PostForm
from .models import post
# Create your views here.

def blog(request):
    articles = post.objects.all()
    return render(request, 'blog.html', {'articles': articles})

def blog_detail(request, id):
    article = post.objects.get(id=id)
    return render(request, 'blog_detail.html', {'article': article})

def blog_edit(request, id=None):
    if id:
        article = post.objects.get(id=id)
    else:
        article = None
    if request.methon == 'POST':
        form =  PostForm(request.POST, request.FILES, instance=article)
        if form.is_valid():
            form.save()
            return redirect('blog')