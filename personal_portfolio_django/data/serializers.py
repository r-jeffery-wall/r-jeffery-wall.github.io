from rest_framework import serializers
from .models import Skill, Social, Project

class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = "__all__"


class SocialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Social
        fields = "__all__"


class  ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = "__all__"
