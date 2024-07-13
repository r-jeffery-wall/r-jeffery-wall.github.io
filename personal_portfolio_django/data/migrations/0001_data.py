# Generated by Django 5.0.7 on 2024-07-13 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60, verbose_name='Name')),
                ('url', models.CharField(max_length=60, verbose_name='URL')),
                ('description', models.CharField(max_length=500, verbose_name='Description')),
                ('image_path', models.ImageField(upload_to='')),
                ('image_alt_text', models.CharField(max_length=120, verbose_name='Image alt text')),
                ('skills', models.CharField(max_length=500, verbose_name='Skills List')),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='Name')),
            ],
        ),
        migrations.CreateModel(
            name='Social',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='Name')),
                ('url', models.CharField(max_length=60, verbose_name='URL')),
                ('icon', models.ImageField(upload_to='')),
            ],
        ),
    ]
