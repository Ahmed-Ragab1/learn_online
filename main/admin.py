from django.contrib import admin

from main.models import Course, CourseCategory, Student, Teacher


# Register your models here.



admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(CourseCategory)
admin.site.register(Course)