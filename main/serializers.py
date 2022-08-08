from . import models
from rest_framework import serializers




class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id','full_name','detail','email','password','qualification','mobile_no','skills', 'teacher_courses']
        depth = 1




class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = "__all__"




class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id','title','describtion','featured_img','techs','created_at','updated_at','category','teacher','course_chapters','related_videos']
        depth = 1
        

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chapter
        fields = "__all__"