from . import models
from rest_framework import serializers




class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id','full_name','detail','email','password','qualification','mobile_no','skills', 'teacher_courses','skill_list']
        depth = 1



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = "__all__"




class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id','title','describtion','category','featured_img','techs','created_at','updated_at','teacher','course_chapters','related_videos','tech_list']
        depth=1

    def __init__(self, *args, **kwargs):
        super(CourseSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method=='POST':
            self.Meta.depth = 0
        else:
            self.Meta.depth = 1




class CreateCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id','title','describtion','category','featured_img','techs','created_at','updated_at','teacher','course_chapters','related_videos','tech_list']
        

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chapter
        # fields = "__all__"
        fields  = ['id','course','title','describtion','video','remarks','chapter_duration']



class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ['id','full_name','email','password','username','interesed_categories']
