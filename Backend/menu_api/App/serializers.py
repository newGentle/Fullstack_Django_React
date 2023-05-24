from rest_framework_nested.relations import NestedHyperlinkedRelatedField
from rest_framework.serializers import ModelSerializer, StringRelatedField
from .models import *


class ReceiptSerializer(ModelSerializer):
    
    class Meta:
        model = Category
        fields = ('__all__')


class FoodsSerializer(ModelSerializer):
    category = StringRelatedField(many=False)
    
    class Meta:
        model = Food
        fields = ['id', 'name', 'photo', 'slug', 'description', 'category', 'category_id']