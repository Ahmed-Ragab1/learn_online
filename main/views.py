import imp
from multiprocessing import context
from unittest import result
from django.shortcuts import render
from main import models
from main.models import Chapter, CourseRating, StudentCourseEnrollment, Teacher,CourseCategory,Course
from main.serializers import  StudentCourseEnrollSerializer, TeacherSerializer,CategorySerializer,CourseSerializer,ChapterSerializer,StudentSerializer,CreateCourseSerializer,CourseRatinSerializer
from rest_framework import generics
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse,HttpResponse
from rest_framework import viewsets


# teacher Data
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

class TeacherCourseList(generics.ListCreateAPIView):
    serializer_class=CourseSerializer
    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher= models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)  




# category Data
class CategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CategorySerializer

    # permission_classes = [permissions.IsAuthenticated]








class TeacherCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class=CourseSerializer
    





# class CategoryList(generics.ListCreateAPIView):
#     queryset = CourseCategory.objects.all()
#     serializer_class = CategorySerializer




# courses Data

class CourseList(viewsets.ModelViewSet):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        qs=super().get_queryset()
        if 'result' in self.request.GET:
            limit=int(self.request.GET['result'])
            qs=models.Course.objects.all().order_by('-id')[:limit]
        if 'category' in self.request.GET:
            category=self.request.GET['category']
            qs=models.Course.objects.filter(techs__icontains=category) 
        if 'skill_name' in self.request.GET and 'teacher' in self.request.GET:
            skill_name=self.request.GET['skill_name']
            teacher=self.request.GET['teacher']
            teacher=models.Teacher.objects.filter(id=teacher).first()
            qs=models.Course.objects.filter(techs__icontains=skill_name,teacher=teacher) 
        return qs




# chapter Data
class ChapterList(generics.ListCreateAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    




class ChapterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer


    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["chapter_duration"]=self.chapter_duration
        print(context)
        return context


class CourseChapterList(generics.ListAPIView):
    serializer_class = ChapterSerializer
    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course= models.Course.objects.get(pk=course_id)
        return models.Chapter.objects.filter(course=course)  




class CourseDetailView(generics.RetrieveAPIView):
    queryset = models.Course.objects.all()

    serializer_class=CourseSerializer






# student Data
class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
    # permission_classes = [permissions.IsAuthenticated]





@csrf_exempt
def student_login(request):
    email=request.POST['email']
    password=request.POST['password']
    try:
        studentData=models.Student.objects.get(email=email,password=password)
    except models.Student.DoesNotExist:
        studentData =None
    if studentData:
        return JsonResponse({'bool':True,'student_id':studentData.id})
    else:
        return JsonResponse({'bool':False})




class StudentEnrollCourse(generics.ListCreateAPIView):
    queryset = StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer


def fetch_enroll_status(request,student_id,course_id):
    student=models.Student.objects.filter(id=student_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    enrollStatus=models.StudentCourseEnrollment.objects.filter(course=course,student=student).count()
    if enrollStatus:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
class EnrolledStudentList(generics.ListAPIView):
    queryset = StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer
    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course= models.Course.objects.get(pk=course_id)
        return models.StudentCourseEnrollment.objects.filter(course=course) 



class CourseRatingList(generics.ListCreateAPIView):
    serializer_class = CourseRatinSerializer
    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course= models.Course.objects.get(pk=course_id)
        return models.CourseRating.objects.filter(course=course)

def fetch_rating_status(request,student_id,course_id):
    student=models.Student.objects.filter(id=student_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    ratingStatus=models.CourseRating.objects.filter(course=course,student=student).count()
    if ratingStatus:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False}) 