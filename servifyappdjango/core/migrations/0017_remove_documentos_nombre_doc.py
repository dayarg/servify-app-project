# Generated by Django 4.2.1 on 2023-05-26 18:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_alter_documento_archivo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='documentos',
            name='nombre_doc',
        ),
    ]
