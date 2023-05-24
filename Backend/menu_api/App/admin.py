from django.contrib import admin

# Register your models here.
from .models import *

class FoodAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
    
admin.site.register(Food, FoodAdmin)
admin.site.register(Category, CategoryAdmin)