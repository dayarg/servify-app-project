# Generated by Django 4.2 on 2023-05-23 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_rename_id_usuarios_usuarios_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='correo',
            field=models.CharField(max_length=50, verbose_name='Correo electronico'),
        ),
    ]
