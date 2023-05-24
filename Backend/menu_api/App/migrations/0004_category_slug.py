# Generated by Django 4.2.1 on 2023-05-21 20:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0003_food_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='slug',
            field=models.SlugField(default=0, max_length=32, verbose_name='Slug'),
            preserve_default=False,
        ),
    ]
