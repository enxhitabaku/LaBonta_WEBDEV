# Generated by Django 2.2.3 on 2020-12-01 14:42

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('LaBontaApp', '0011_auto_20201201_1428'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='food_category',
            field=models.CharField(choices=[('Pizza', 'Pizza'), ('Pasta', 'Pasta'), ('Salad', 'Salad'), ('Drinks', 'Drinks'), ('Breakfast', 'Breakfast'), ('Appetizer', 'Appetizer'), ('Wine List', 'Wine List'), ('Meat', 'Meat')], default=django.utils.timezone.now, max_length=15),
            preserve_default=False,
        ),
    ]
