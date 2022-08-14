from distutils.command.upload import upload
from email.policy import default
from itertools import count
import profile
from tabnanny import verbose
from turtle import title
from django.db import models 
from django.core import serializers

# Create your models here.


class Teacher(models.Model):
    full_name     = models.CharField(max_length=100)
    email         = models.CharField(max_length=100)
    password      = models.CharField(max_length=100,blank=True,null=True)
    qualification = models.CharField(max_length=200)
    mobile_no     = models.CharField(max_length=20)
    profile_img=models.ImageField(upload_to='teacher_profile_imgs/',null=True)
    skills        = models.TextField(null=True)

    def __str__(self) -> str:
        return self.full_name
    def skill_list(self):
        skill_list=self.skills.split(',')
        return skill_list
    def total_teacher_courses(self):
        total_courses=Course.objects.filter(teacher=self).count()
        return total_courses
    def total_teacher_chapters(self):
        total_chapters=Chapter.objects.filter(course__teacher=self).count()
        return total_chapters
    def total_teacher_students(self):
        total_students=StudentCourseEnrollment.objects.filter(course__teacher=self).count()
        return total_students


class Student(models.Model):
    full_name            = models.CharField(max_length=100)
    email                = models.CharField(max_length=100)
    password             = models.CharField(max_length=100,blank=True,null=True)
    username             = models.CharField(max_length=200)
    interesed_categories = models.TextField()
    profile_img=models.ImageField(upload_to='student_profile_imgs/',null=True)


    def __str__(self) -> str:
        return self.full_name
    def enrolled_courses(self):
        enrolled_courses=StudentCourseEnrollment.objects.filter(student=self).count()
        return enrolled_courses
    def favourite_courses(self):
        favourite_courses=StudentFavoriteCourse.objects.filter(student=self).count()
        return favourite_courses
    def complete_assignments(self):
        complete_assignments=StudentAssignment.objects.filter(student=self,student_status=True).count()
        return complete_assignments
    def pending_assignments(self):
        pending_assignments=StudentAssignment.objects.filter(student=self,student_status=False).count()
        return pending_assignments


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
    course_views= models.BigIntegerField(default=0)

    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural="Courses"

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
    def course_rating(self):
        course_rating=CourseRating.objects.filter(course=self).aggregate(avg_rating=models.Avg('rating'))
        return course_rating['avg_rating']


class Chapter(models.Model) :
    course       =  models.ForeignKey(Course,on_delete=models.CASCADE,related_name='course_chapters')   
    title        = models.CharField(max_length=100)
    describtion  = models.TextField()
    video        =  models.FileField(upload_to='chapter_videos/',null=True)
    remarks      = models.TextField(null=True)
    created_at   = models.DateTimeField(auto_now_add=True)
    updated_at   = models.DateTimeField(auto_now=True)

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
            seconds  = duration%60
            print('duration (M:S) = ' + str(minutes) + ':' + str(seconds))
        return seconds






class StudentCourseEnrollment(models.Model):
    course  =  models.ForeignKey(Course,on_delete=models.CASCADE,related_name='enrolled_courses')
    student =  models.ForeignKey(Student,on_delete=models.CASCADE,related_name='enrolled_student')
    enrolled_time = models.DateTimeField(auto_now_add=True)
        
    class Meta:
        verbose_name_plural= "Enrolled Courses"
    
    def __str__(self) -> str:
        return f"{self.student}-{self.course}"
        return f"{self.student}-{self.course}"


class CourseRating(models.Model):
    course  =  models.ForeignKey(Course,on_delete=models.CASCADE)
    student =  models.ForeignKey(Student,on_delete=models.CASCADE)
    rating=   models.PositiveBigIntegerField(default=0)
    review=   models.TextField(null=True)
    review_time = models.DateTimeField(auto_now_add=True)
    def __str__(self) -> str:
        return f"{self.student}-{self.course} {self.rating}"





class StudentFavoriteCourse(models.Model):
    course  =  models.ForeignKey(Course,on_delete=models.CASCADE)
    student =  models.ForeignKey(Student,on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
        
    class Meta:
        verbose_name_plural= "student favourate Courses"
    
    def __str__(self) -> str:
        return f"{self.student}-{self.course}"




class StudentAssignment(models.Model):
    teacher  =  models.ForeignKey(Teacher,on_delete=models.CASCADE)
    student  =  models.ForeignKey(Student,on_delete=models.CASCADE)
    title    =   models.CharField(max_length=100)
    detail   =   models.TextField(null=True)
    student_status = models.BooleanField(default=False,null=True)
    add_time = models.DateTimeField(auto_now_add=True)


    def __str__(self) -> str:
        return f"{self.title}"

# notification maodel
class Notification(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    student=models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    notif_subject=models.CharField(max_length=200,null=True)
    notif_for=models.CharField(max_length=200)
    notif_created_time=models.DateTimeField(auto_now_add=True)
    notifiread_status=models.BooleanField(default=False)


class Quiz(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    title=models.CharField(max_length=200)
    detail=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def assign_status(self):
        return CourseQuiz.objects.filter(quiz=self).count()





class QuizQuestions(models.Model):
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    questions=models.CharField(max_length=200)
    ans1=models.CharField(max_length=200)
    ans2=models.CharField(max_length=200)
    ans3=models.CharField(max_length=200)
    ans4=models.CharField(max_length=200)
    right_ans=models.CharField(max_length=200)
    add_time=models.DateTimeField(auto_now_add=True)


class CourseQuiz(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    add_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural="courses Quiz"



class AttempQuiz(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    question=models.ForeignKey(QuizQuestions,on_delete=models.CASCADE,null=True)
    right_ans=models.CharField(max_length=200,null=True)
    add_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural="Attemped Questions"




class StudyMatirial(models.Model) :
    course       =  models.ForeignKey(Course,on_delete=models.CASCADE)   
    title        = models.CharField(max_length=100)
    describtion  = models.TextField()
    upload       =  models.FileField(upload_to='study_materials/',null=True)
    remarks      = models.TextField(null=True)


    def __str__(self) -> str:
        return self.title