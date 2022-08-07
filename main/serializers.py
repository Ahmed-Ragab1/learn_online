from . import models
from rest_framework import serializers




class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = "__all__"
        # fields = ['id', 'full_name', 'eamil', 'password', 'qualification', 'address', 'mobile_no', 'created_at', 'updated_at']





        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = ['id','title','describtion']