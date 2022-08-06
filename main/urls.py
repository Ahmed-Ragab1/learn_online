from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    # teacher
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher-login',views.teacher_login),

    path('category/', views.CategoryList.as_view()),


    #category

    path('category/', views.CategoryList.as_view()),

    #course

    path('course/', views.CourseList.as_view()),

    path('chapter/', views.ChapterList.as_view()),

    path('chapter/<int:pk>/', views.ChapterDetailView.as_view()),

    path('teacher-courses/<int:teacher_id>',views.TeacherCourseList.as_view()),

    path('course-chapters/<int:course_id>',views.CourseChapterList.as_view()),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

