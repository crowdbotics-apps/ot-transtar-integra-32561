from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from home.models import Company
from users.models import AccessCoordinator, AuthorizedUsers
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
from django.db import models


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']
        extra_kwargs ={
            'id':{
                'required':False
            }
        }

class AuthorizedUserSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='user.name')
    email = serializers.EmailField(source='user.email')
    class Meta:
        model = AuthorizedUsers
        fields = ['id', 'email', 'name', 'company']
        extra_kwargs = {
            'name': {
                'required': True,
                'allow_blank': False,
            },
            'email': {
                'required': True,
                'allow_blank': False,
            },
            'company': {
                'required': False,
'read_only': True,
            }
        }


class AccessCoordinatorSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='user.name')
    email = serializers.EmailField(source='user.email')
    
    class Meta:
        model = AccessCoordinator
        fields = ['id', 'email', 'name', 'company']
        extra_kwargs = {
            'name': {
                'required': True,
                'allow_blank': False,
            },
            'email': {
                'required': True,
                'allow_blank': False,
            },
            'company': {
                'required': False,
'read_only':True,
            }
        }


class SignupSerializer(serializers.ModelSerializer):
    accesscoordinator_set = AccessCoordinatorSerializer(many=True)
    authorizedusers_set = AuthorizedUserSerializer(many=True)
    class Meta:
        model = Company
        fields = ('id',
        'name',
        'account_number',
        'accesscoordinator_set',
        'authorizedusers_set',
        'street_address',
        'street_address_two',
        'city',
        'state',
        'postal',
        'country'
        )
        extra_kwargs = {
            'name': {
                'required': True,
                'allow_blank': False,
            },
            'account_number': {
                'required': True,
                'allow_blank': False,
            },
            'accesscoordinators_set':{
                'allow_blank': True,
                'required': False,

            },
            'authorizedusers_set':{
                'allow_blank': True,
                'required': False
            }
        }
    def create(self, validated_data):
        access_coordinator=validated_data.pop('accesscoordinator_set')
        authorized_user = validated_data.pop('authorizedusers_set')
        company = Company.objects.create(**validated_data)
        

        for i in access_coordinator:
            user=None
            try:
                user = User.objects.get(email=i['user']['email'])
            except User.DoesNotExist:
                user = User(
                    email=i['user']['email'],
                    name=i['user']['name'],
                    username=generate_unique_username([
                        i['user']['email'],
                        i['user']['name'],
                        'accessuser'
                    ])
                )
                user.set_password('password')
                user.save()
            accessuser = AccessCoordinator.objects.create(user=user,company=company)
                #accessuser.save()
            #request = self._get_request()
            #setup_user_email(request, user, [])

        for i in authorized_user:
            user=None
            try:
                user = User.objects.get(email=i['user']['email'])
            except User.DoesNotExist:
                user = User(
                    email=i['user']['email'],
                    name=i['user']['name'],
                    username=generate_unique_username([
                        i['user']['email'],
                        i['user']['name'],
                        'authuser'
                    ])
                )
                #passo = User.objects.make_random_password()
                user.set_password('password')
                user.save()
                print('saved')
            authuser = AuthorizedUsers.objects.create(user=user,company=company)
                #authuser.save()
            #request = self._get_request()
            #setup_user_email(request, user, [])
            new_company = Company.objects.get(pk=company.id)
            #serialized = SignupSerializer(instance=new_company)
            print(new_company)
        return new_company

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm

"""
To be worked on, for a proper serialized class and call to be used in future.
"""

class VerifyCertificateSerializer(serializers.Serializer):
    pass
class VerifyDRSSerializer(serializers.Serializer):
    pass
