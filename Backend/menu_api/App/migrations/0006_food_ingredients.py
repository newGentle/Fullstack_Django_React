# Generated by Django 4.2.1 on 2023-05-25 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0005_remove_food_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='ingredients',
            field=models.TextField(default=0, verbose_name='Ингредиенты'),
            preserve_default=False,
        ),
    ]
