# Generated by Django 4.1 on 2022-08-07 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_chapter_course_alter_course_teacher'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='detail',
            field=models.TextField(null=True),
        ),
    ]