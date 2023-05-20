from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import *
from .models import *

# Create your views here.

class MenuApiView(ListAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodsSerializer