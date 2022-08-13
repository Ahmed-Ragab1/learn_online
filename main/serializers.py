from dataclasses import field, fields
from urllib import request
from . import models
from rest_framework import serializers




class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id','full_name','email','password','qualification','mobile_no','skills','profile_img','teacher_courses','skill_list']
        
        def __init__(self,*args,**kwargs):
            super(TeacherSerializer,self).__init__(*args,**kwargs)
            request = self.context.get('request')
            self.Meta.depth=0
            if request and request.method == 'GET':
                self.Meta.depth=1
                
class TeacherDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields=['total_teacher_courses','total_teacher_chapters','total_teacher_students']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = "__all__"




class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id','title','describtion','category','featured_img','techs','created_at','updated_at','teacher','course_chapters','related_videos','tech_list','total_enrolled_students','course_rating']
        depth=1


    def __init__(self, *args, **kwargs):
        super(CourseSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method=='GET':
            self.Meta.depth = 2


class CreateCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id','title','describtion','category','featured_img','techs','created_at','updated_at','teacher','course_chapters','related_videos','tech_list','total_enrolled_students']
        


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chapter
        # fields = "__all__"
        fields  = ['id','course','title','describtion','video','remarks']
        def __init__(self,*args,**kwargs):
            super(ChapterSerializer,self).__init__(*args,**kwargs)
            request = self.context.get('request')
            self.Meta.depth=0
            if request and request.method == 'GET':
                self.Meta.depth=1



class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ['id','full_name','email','password','username','interesed_categories','profile_img']


class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields  = ['id','course','student','enrolled_time']
    def __init__(self,*args,**kwargs):
        super(StudentSerializer,self).__init__(*args,**kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=1


class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields  = ['id','course','student','enrolled_time']
    def __init__(self,*args,**kwargs):
        super(StudentCourseEnrollSerializer,self).__init__(*args,**kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=2



class CourseRatinSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseRating
        fields  = ['id','course','student','rating','review','review_time']
    def __init__(self,*args,**kwargs):
        super(CourseRatinSerializer,self).__init__(*args,**kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=1



class StudentFavoriteCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentFavoriteCourse
        fields = ['id','course','student','status']
        depth=2

    def __init__(self, *args, **kwargs):
        super(StudentFavoriteCourseSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method=='POST':
            self.Meta.depth = 0
        else:
            self.Meta.depth = 2








class StudentAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentAssignment
        fields = ['id','teacher','student','title','detail','student_status','add_time']
        # depth=1

    def __init__(self, *args, **kwargs):
        super(StudentAssignmentSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method=='POST':
            self.Meta.depth = 0
        else:
            self.Meta.depth = 2


class StudentDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Student
        fields=['enrolled_courses','favourite_courses','complete_assignments','pending_assignments']


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Notification
        fields = "__all__"
        
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Quiz
        fields = ['id','teacher','title','detail','assign_status','add_time']
        depth=1
    def __init__(self, *args, **kwargs):
        super(QuizSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method=='GET': 
            self.Meta.depth = 2                
            
            
            

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QuizQuestions
        # fields = "__all__"
        fields  = ['id','quiz','questions','ans1','ans2','ans3','ans4','right_ans']
        def __init__(self,*args,**kwargs):
            super(QuestionSerializer,self).__init__(*args,**kwargs)
            request = self.context.get('request')
            self.Meta.depth=0
            if request and request.method == 'GET':
                self.Meta.depth=1



class CourseQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseQuiz
        fields  = ['id','teacher','course','quiz','add_time']
    def __init__(self,*args,**kwargs):
        super(CourseQuizSerializer,self).__init__(*args,**kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=2



class AttempQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AttempQuiz
        fields  = ['id','student','question','right_ans','add_time']
    def __init__(self,*args,**kwargs):
        super(AttempQuizSerializer,self).__init__(*args,**kwargs)
        request = self.context.get('request')
        self.Meta.depth=0
        if request and request.method == 'GET':
            self.Meta.depth=2