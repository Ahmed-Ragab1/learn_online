from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from .views import CourseList
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r"course", CourseList)



urlpatterns = [
    # teacher
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher-login',views.teacher_login),



    #category
    path('category/', views.CategoryList.as_view()),

    #course
   

    # chapter
    path('course-chapters/<int:course_id>',views.CourseChapterList.as_view()),

    path('chapter/', views.ChapterList.as_view()),

    path('chapter/<int:pk>/', views.ChapterDetailView.as_view()),

    path('teacher-courses/<int:teacher_id>',views.TeacherCourseList.as_view()),

    path('course-chapters/<int:course_id>',views.CourseChapterList.as_view()),

    # teacher courses
    path('teacher-courses/<int:teacher_id>',views.TeacherCourseList.as_view()),
  
    path('teacher-course-detail/<int:pk>',views.TeacherCourseDetail.as_view()),

    #student
    path('student/', views.StudentList.as_view()),

    path('student-login',views.student_login),


    path('student-enroll-course/',views.StudentEnrollCourse.as_view()),

    path('fetch-enroll-status/<int:student_id>/<int:course_id>',views.fetch_enroll_status),


]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += router.urls


