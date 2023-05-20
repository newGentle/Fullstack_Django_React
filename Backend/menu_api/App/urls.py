from django.urls import path, include
from .views import *

urlpatterns = [
    path("api/v1/menu/", MenuApiView.as_view(), name='foods_list'),
]
