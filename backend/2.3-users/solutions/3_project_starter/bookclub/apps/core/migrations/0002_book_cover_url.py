# Generated by Django 3.0.5 on 2020-04-17 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='cover_url',
            field=models.URLField(blank=True),
        ),
    ]
