from http.client import HTTPResponse
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from django.http import JsonResponse
#from rest_framework_swagger.renderers import OpenAPIRenderer, SwaggerUIRenderer
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import response, schemas
from django.contrib.auth import get_user_model; 
from home.api.v1.viewsets import (
    AccessCoordinatorViewSet,
    AuthorizedUserViewSet,
    EmployeeViewSet,
    NotificationViewSet,
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("company", SignupViewSet, basename="company")
router.register("login", LoginViewSet, basename="login")
router.register('authorized',AuthorizedUserViewSet, basename='authorized')
router.register('coordinator',AccessCoordinatorViewSet, basename='coordinator')
router.register('employee',EmployeeViewSet, basename='employee')
router.register('notification',NotificationViewSet, basename='notification')

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
    
#to be moved
@api_view(['GET'])  
def verify_client(request):
    return JsonResponse(data={
        'message': 'success',
        'data': {
            'output':{
                'zip':30432
            },
            'function':'GetHolder',
            'reg_line':'...',
            'reg_line_two':'..'
        }
    })


def create_admin(request):
    User = get_user_model(); 
    User.objects.create_superuser('admin', 'ezekiel.okoduwa@crowdbotics.com', 'password')

urlpatterns = [
    path("", include(router.urls)),
    path("verify_cert",get_cert,name='verify_cert'),
    path("verify_drs",get_drs,name='verify_drs'),
    path("verify_client",verify_client,name='verify_client'),
    path("create_admin",create_admin,name='create_admin'),
    re_path(r'^password-reset/', include('django_rest_passwordreset.urls',namespace='password_reset')),
]
