from django.contrib import admin

# Register your models here.
from .models import *

class FoodAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
    list_display = ('name', 'get_description')
    list_filter = ['category']
    def get_description(self, obj):
        get_description = obj.description[0: 70]
        return get_description
    get_description.short_description = 'Описание'

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
    
admin.site.register(Food, FoodAdmin)
admin.site.register(Category, CategoryAdmin)