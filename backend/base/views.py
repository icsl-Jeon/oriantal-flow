from django.shortcuts import render
from django.http import JsonResponse
from .posts import posts
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/posts',
        '/api/posts/create/',
        '/api/posts/<id>/',
        '/api/posts/<update>/<id>',
    ]
    return Response(data=routes)


@api_view(['GET'])
def getPosts(request):
    return Response(data=posts)


@api_view(['GET'])
def getPost(request, pk):
    for post in posts:
        if post['id'] == int(pk):
            return Response(data=post)

    return Response()
