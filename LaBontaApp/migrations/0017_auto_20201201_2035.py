# Generated by Django 2.2.3 on 2020-12-01 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LaBontaApp', '0016_auto_20201201_1533'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='food',
            field=models.CharField(choices=[('Pizza', 'Pizza'), ('Pasta', 'Pasta'), ('Salad', 'Salad'), ('Drinks', 'Drinks'), ('Breakfast', 'Breakfast'), ('Appetizer', 'Appetizer'), ('Wine List', 'Wine List'), ('Meat', 'Meat')], max_length=15, null=True),
        ),
    ]
