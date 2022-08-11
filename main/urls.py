from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

from .views import CourseList
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r"course", CourseList)

urlpatterns = [
    # teacher
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher/change-password/<int:teacher_id>/', views.teacher_change_password),
    path('teacher-login',views.teacher_login),
    path('teacher/dashboard/<int:pk>/',views.TeacherDashboard.as_view())
    ,



    #category
    path('category/', views.CategoryList.as_view()),


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
    path('student/<int:pk>/', views.StudentDetail.as_view()),
    path('student-login',views.student_login),
    path('student/dashboard/<int:pk>/',views.StudentDashboard.as_view()),
    path('student-enroll-course/',views.StudentEnrollCourse.as_view()),
    path('student/change-password/<int:student_id>/', views.student_change_password),
    path('fetch-enroll-status/<int:student_id>/<int:course_id>',views.fetch_enroll_status),

    path('fetch-all-enrolled-students/<int:teacher_id>',views.EnrolledStudentList.as_view()),
    path('fetch-enrolled-students/<int:course_id>',views.EnrolledStudentList.as_view()),

    path('course-rating/<int:course_id>', views.CourseRatingList.as_view()),
    path('fetch-rating-status/<int:student_id>/<int:course_id>',views.fetch_rating_status),
    path('fetch-recommened-courses/<int:studentId>',views.CourseList.as_view({'get': 'list'})),
    
    
    path('fetch-enrolled-courses/<int:student_id>',views.EnrolledStudentList.as_view()),
    # {"get": "retrieve", "post": "create", "put": "update", "patch": "partial_update", "delete": "destroy"}

    path('student-add-favorite-course/',views.StudentFavoriteCourseList.as_view()),
    path('student-remove-favorite-course/<int:course_id>/<int:student_id>',views.remove_favorite_course),
    path('fetch-favorite-status/<int:student_id>/<int:course_id>',views.fetch_favorite_status),
    path('fetch-favorite-courses/<int:student_id>',views.StudentFavoriteCourseList.as_view()),


    path('student-assignment/<int:teacher_id>/<int:student_id>', views.AssignmentList.as_view()),

    path('my-assignments/<int:student_id>', views.MyAssignmentList.as_view()),

    path('update-assignment/<int:pk>', views.UpdateAssignment.as_view()),



]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += router.urls

