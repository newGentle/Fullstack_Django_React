from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.decorators import action
from .serializers import *
from .models import *

# Create your views here.

class ReceiptsViewSet(ReadOnlyModelViewSet):
    model = Category
    queryset = Category.objects.all()
    serializer_class = ReceiptSerializer
    
class FoodsViewSet(ReadOnlyModelViewSet):
    model = Food
    serializer_class = FoodsSerializer
    
    def get_queryset(self):
        cat_id = self.kwargs['category_id']
        category = Category.objects.get(id=cat_id)
        foods = Food.objects.filter(category = category)
        return foods

# class ReceiptViewSet(ReadOnlyModelViewSet):
#     serializer_class = FoodsSerializer
    
#     def get_queryset(self, *args, **kwargs):
        
#         # print(Food.objects.filter(category = Category.objects.get(id=self.kwargs['pk'])))
        
#         cat_id = self.kwargs['pk']
#         try:
#             category = Category.objects.get(id=cat_id)
#             foods = Food.objects.filter(category = category).values_list('category_id', 'name', 'id')
#             response = [category.name, foods]
#             print(response)
#         except Exception:
#             raise Exception('Not Exist')
#         return foods
        
    