# Generated by Django 2.2.3 on 2020-12-01 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LaBontaApp', '0009_auto_20201201_1219'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='takeorder',
            name='portions',
        ),
        migrations.AddField(
            model_name='product',
            name='portions',
            field=models.IntegerField(default=0),
        ),
    ]