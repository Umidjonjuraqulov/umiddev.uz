from django.contrib import admin
from .models import post
# Register your models here.

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'author', 'date', 'image')
    search_fields = ('title', 'author')
    list_filter = ('date',)
    def __str__(self):
        return self.title
admin.site.register(post, PostAdmin)