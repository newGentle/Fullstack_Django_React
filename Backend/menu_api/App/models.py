from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=32, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    photo = models.ImageField(verbose_name='фото', upload_to='menu_img', default='default.png')
    price = models.FloatField(verbose_name='цена')
    category = models.ForeignKey("Category", verbose_name="Категория", related_name='cat' , on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Блюдо'
        verbose_name_plural = 'Блюда'
        
    def __str__(self):
        return self.name
    
    
class Category(models.Model):

    name = models.CharField(max_length=32, verbose_name='Название')
    
    
    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.name
