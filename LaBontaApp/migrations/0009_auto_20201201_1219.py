# Generated by Django 2.2.3 on 2020-12-01 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LaBontaApp', '0008_auto_20201201_1213'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='takeorder',
            name='product',
        ),
        migrations.AddField(
            model_name='takeorder',
            name='product',
            field=models.ManyToManyField(to='LaBontaApp.Product'),
        ),
    ]
