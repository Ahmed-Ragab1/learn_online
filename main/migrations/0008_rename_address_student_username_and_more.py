# Generated by Django 4.1 on 2022-08-08 14:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_teacher_detail'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='address',
            new_name='username',
        ),
        migrations.RemoveField(
            model_name='student',
            name='mobile_no',
        ),
        migrations.RemoveField(
            model_name='student',
            name='qualification',
        ),
    ]
