# Generated by Django 4.0.1 on 2022-01-29 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Primtodo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task', models.CharField(max_length=50)),
                ('detail', models.CharField(max_length=200)),
                ('isCompleted', models.BooleanField(default=False)),
            ],
        ),
    ]
