# Generated by Django 2.1.2 on 2018-10-13 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FaceboopFanPage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=127)),
                ('image', models.CharField(max_length=127)),
                ('email', models.CharField(max_length=127)),
                ('password', models.CharField(max_length=127)),
                ('date_joined', models.CharField(max_length=127)),
            ],
        ),
        migrations.CreateModel(
            name='FaceboopPost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=127)),
                ('text', models.TextField()),
            ],
        ),
    ]
