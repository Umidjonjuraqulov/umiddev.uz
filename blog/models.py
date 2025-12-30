from django.db import models

# Create your models here.

class post(models.Model):
    title = models.CharField(max_length=250)
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=200)
    image = models.ImageField(upload_to='media/',blank=True, null=True)