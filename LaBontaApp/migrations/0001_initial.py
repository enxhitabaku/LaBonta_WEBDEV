# Generated by Django 3.1.3 on 2020-11-15 22:05

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BookEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=13)),
                ('email', models.CharField(max_length=25, validators=[django.core.validators.RegexValidator('^[a-z0-9]+[\\._]?[a-z0-9]+[@]\\w+[.]\\w{2,3}$')])),
                ('phoneNo', models.CharField(max_length=13, validators=[django.core.validators.RegexValidator('(\\+355|0)((69)|(68)|(67))[0-9]{7}')])),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('no_of_people', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section_type', models.CharField(max_length=10)),
                ('product', models.CharField(max_length=20)),
                ('price', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='DownlodableItems',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_header', models.CharField(max_length=15)),
                ('item_to_download', models.FileField(blank=True, upload_to='media/DownlodableItems')),
                ('to_download_file_name', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='FoodSection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='TakeOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.CharField(max_length=20)),
                ('price', models.IntegerField(default=0)),
                ('portions', models.IntegerField(default=0)),
            ],
        ),
    ]