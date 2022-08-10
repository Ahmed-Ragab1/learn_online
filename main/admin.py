from django.contrib import admin

from main.models import Course, CourseCategory, Student, StudentCourseEnrollment, Teacher,Chapter
from main.models import Course, CourseCategory, Student, StudentCourseEnrollment, Teacher,Chapter,CourseRating,StudentFavoriteCourse,StudentAssignment


# Register your models here.



admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(CourseCategory)
admin.site.register(Course)
admin.site.register(Chapter)
admin.site.register(StudentCourseEnrollment)

admin.site.register(CourseRating)
admin.site.register(StudentFavoriteCourse)
admin.site.register(StudentAssignment)