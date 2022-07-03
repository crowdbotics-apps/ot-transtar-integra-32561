from http.client import HTTPResponse
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.http import JsonResponse
#from rest_framework_swagger.renderers import OpenAPIRenderer, SwaggerUIRenderer
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import response, schemas

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("register", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")


#removed, and api call made instead for view
cert={
    'message': 'success',
    'data': {
        'fees':20,
        'issuer':'Crowdbotics',
        'reg_line':'...',
        'reg_line_two':'..',
        'no_of_securities':4,
        'issued_date':'7/1/2022',
        'canceled_date': '8/2/2022'
    }
}

#to be moved
@api_view(['GET'])
def get_cert(request):
    return JsonResponse(data=cert)


#to be moved
@api_view(['GET'])  
def get_drs(request):
    return JsonResponse(data={
        'message': 'success',
        'data': {
            'fees':20,
            'issuer':'Crowdbotics',
            'reg_line':'...',
            'reg_line_two':'..'
        }
    })
    
urlpatterns = [
    path("", include(router.urls)),
    path("verify_cert",get_cert,name='verify_cert'),
    path("verify_drs",get_drs,name='verify_drs'),
]
