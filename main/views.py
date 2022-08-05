import imp
from django.shortcuts import render
from main import models
from main.models import Teacher,CourseCategory
from main.serializers import  CategorySerializer, TeacherSerializer
from main.models import Teacher,CourseCategory,Course
from main.serializers import  TeacherSerializer,CategorySerializer,CourseSerializer
from main.models import Chapter, Teacher,CourseCategory,Course
from main.serializers import  TeacherSerializer,CategorySerializer,CourseSerializer,ChapterSerializer
from rest_framework import generics
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse,HttpResponse


class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    try:
        teacherData=models.Teacher.objects.get(email=email,password=password)
    except models.Teacher.DoesNotExist:
        teacherData =None
    if teacherData:
        return JsonResponse({'bool':True,'teacher_id':teacherData.id})
    else:
        return JsonResponse({'bool':False})



# class CategoryList(generics.ListCreateAPIView):
#     queryset = CourseCategory.objects.all()
#     serializer_class = CategorySerializer

#spicific Teacher Course 

class TeacherCourseList(generics.ListAPIView):
    serializer_class=CourseSerializer
    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher= models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)  
class CategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CategorySerializer

    # permission_classes = [permissions.IsAuthenticated]






# class CategoryList(generics.ListCreateAPIView):
#     queryset = CourseCategory.objects.all()
#     serializer_class = CategorySerializer



class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class ChapterList(generics.ListCreateAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
