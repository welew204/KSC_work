# Generated by Django 3.0.5 on 2020-04-21 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='readinglist',
            name='topic',
            field=models.CharField(default='fiction', max_length=64),
            preserve_default=False,
        ),
    ]
