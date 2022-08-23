from django.contrib import admin

from main.models import AttempQuiz, Course, CourseCategory, Student, StudentCourseEnrollment, Teacher,Chapter,StudyMatirial
from main.models import Course, CourseCategory, CourseQuiz, Notification, Quiz, QuizQuestions, Student, StudentCourseEnrollment, Teacher,Chapter
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

class NotificationAdmin(admin.ModelAdmin):
    list_display=['id','notif_subject','notif_for','notifiread_status']
admin.site.register(Notification)


admin.site.register(Quiz)
admin.site.register(QuizQuestions)
admin.site.register(CourseQuiz)
admin.site.register(AttempQuiz)
admin.site.register(StudyMatirial)


admin.site.site_header='WELCOME to LMS'
admin.site.site_title='iti'
admin.site.index_title = 'WELCOME ADMIN USER TO Information Technology Institute'


