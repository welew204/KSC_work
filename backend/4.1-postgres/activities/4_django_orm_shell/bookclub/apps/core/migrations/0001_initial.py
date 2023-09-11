# Generated by Django 3.0.5 on 2020-04-24 04:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ReadingList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('fiction', 'Adult Fiction'), ('nonfiction', 'Adult Non-Fiction'), ('children', "Children's Books")], max_length=64)),
                ('description', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
                ('score', models.IntegerField(default=0)),
                ('views', models.PositiveIntegerField(default=0)),
                ('creator_user', models.ForeignKey(help_text='User who created this reading list', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('description', models.TextField(blank=True)),
                ('reading_list', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.ReadingList')),
            ],
        ),
    ]
