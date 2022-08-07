from distutils.command.upload import upload
from email.policy import default
from django.db import models

# Create your models here.


class Teacher(models.Model):
    full_name     = models.CharField(max_length=100)
    email         = models.CharField(max_length=100)
    password      = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_no     = models.CharField(max_length=20)
    skills        = models.TextField(null=True)

    def __str__(self) -> str:
        return self.full_name


class Student(models.Model):
    full_name            = models.CharField(max_length=100)
    email                = models.CharField(max_length=100)
    password             = models.CharField(max_length=100)
    qualification        = models.CharField(max_length=200)
    address              = models.CharField(max_length=200)
    mobile_no            = models.CharField(max_length=20)
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
    teacher     =  models.ForeignKey(Teacher,on_delete=models.CASCADE)
    featured_img= models.ImageField(upload_to='course_imgs/', null=True)
    techs = models.TextField(null=True)
    title        = models.CharField(max_length=100)
    describtion  = models.TextField()
    category     =  models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher      =  models.ForeignKey(Teacher,on_delete=models.CASCADE)
    featured_img =  models.ImageField(upload_to='course_imgs/',null=True)
    techs        = models.TextField(null=True)

    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title



class Chapter(models.Model) :
    course       =  models.ForeignKey(Course,on_delete=models.CASCADE)   
    title        = models.CharField(max_length=100)
    describtion  = models.TextField()
    video        =  models.FileField(upload_to='chapter_videos/',null=True)
    remarks        = models.TextField(null=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title