from distutils.command.upload import upload
from email.policy import default
from tabnanny import verbose
from django.db import models 
from django.core import serializers

# Create your models here.


class Teacher(models.Model):
    full_name     = models.CharField(max_length=100)
    detail        = models.TextField(null=True)
    email         = models.CharField(max_length=100)
    password      = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_no     = models.CharField(max_length=20)
    skills        = models.TextField(null=True)

    def __str__(self) -> str:
        return self.full_name

    
    def skill_list(self):
        skill_list=self.skills.split(',')
        return skill_list


class Student(models.Model):
    full_name            = models.CharField(max_length=100)
    email                = models.CharField(max_length=100)
    password             = models.CharField(max_length=100)
    username             = models.CharField(max_length=200)
    interesed_categories = models.TextField()

    def __str__(self) -> str:
        return self.full_name





class CourseCategory(models.Model) :
    title       = models.CharField(max_length=100)
    describtion = models.TextField()
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title



class Course(models.Model) :
    title       = models.CharField(max_length=100)
    describtion = models.TextField()
    category    =  models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher     =  models.ForeignKey(Teacher,on_delete=models.CASCADE,related_name='teacher_courses')
    featured_img= models.ImageField(upload_to='course_imgs/', null=True)
    techs = models.TextField(null=True)

    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural="3. courses"

    def __str__(self) -> str:
        return self.title


    def related_videos(self):
        related_videos= Course.objects.filter(techs__icontains=self.techs)
        return serializers.serialize('json',related_videos)
   
   
    def tech_list(self):
        tech_list=self.techs.split(',')
        return tech_list
        
    def total_enrolled_students(self):
        total_enrolled_students=StudentCourseEnrollment.objects.filter(course=self).count()
        return total_enrolled_students


class Chapter(models.Model) :
    course       =  models.ForeignKey(Course,on_delete=models.CASCADE,related_name='course_chapters')   
    title        = models.CharField(max_length=100)
    describtion  = models.TextField()
    video        =  models.FileField(upload_to='chapter_videos/',null=True)
    remarks        = models.TextField(null=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title


    def chapter_duration(self):
        seconds=0
        import cv2
        cap = cv2.VideoCapture(self.video.path)
        fps = cap.get(cv2.CAP_PROP_FPS)
        frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        if frame_count:
            duration = frame_count/fps
            print('fps = ' + str(fps))
            print('number of frams  = ' + str(frame_count))
            print('duration  = ' + str(duration))
            minutes = int(duration/60)
            second  = duration%60
            print('duration (M:S) = ' + str(minutes) + ':' + str(seconds))






class StudentCourseEnrollment(models.Model):
    course  =  models.ForeignKey(Course,on_delete=models.CASCADE,related_name='enrolled_courses')
    student =  models.ForeignKey(Student,on_delete=models.CASCADE,related_name='enrolled_student')
    enrolled_time = models.DateTimeField(auto_now_add=True)
        
    class Meta:
        verbose_name_plural= "Enrolled Courses"
    
    def __str__(self) -> str:
        return f"{self.student}-{self.course}"