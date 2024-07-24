from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Skill
from .serializers import *

# Create your views here.

@api_view(['GET'])
def get_skills(request):
    if request.method == 'GET':
        data = Skill.objects.all()

        serializer = SkillSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_socials(request):
    if request.method == 'GET':
        data = Social.objects.all()

        serializer = SocialSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_projects(request):
    if request.method == 'GET':
        data = Project.objects.all()

        serializer = ProjectSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(status=status.HTTP_400_BAD_REQUEST)
