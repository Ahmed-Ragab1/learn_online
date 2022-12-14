# Generated by Django 4.1 on 2022-08-08 17:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_rename_address_student_username_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentCourseEnrollment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('enrolled_time', models.DateTimeField(auto_now_add=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_courses', to='main.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_student', to='main.student')),
            ],
            options={
                'verbose_name_plural': 'Enrolled Courses',
            },
        ),
    ]
