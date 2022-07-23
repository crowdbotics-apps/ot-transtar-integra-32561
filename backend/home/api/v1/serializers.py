from base64 import b64encode
from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from home.models import Company
from users.models import AccessCoordinator, AuthorizedUsers, Employee, Notification
from rest_framework import serializers, renderers
from rest_auth.serializers import PasswordResetSerializer
from django.db import models
from django.core.mail import send_mail


User = get_user_model()

def password_message(user, password, send_link=True):
    data = [
        "Hi {0},\n here is you auto generated password : {1} \n".format(user.name,password),
        "please endeavour to change it"
    ]

    if send_link is True:
        usertype = 'broker'
        if user.is_staff:
            usertype='admin'
        data.append("\n or use link ")
        data.append("https://ot-transtar-integra-32561.botics.co/{0}/login?verified={1}".format(
            usertype,
            b64encode(
                renderers.JSONRenderer().render(
                    data={'email':user.email,'password':password}
                )
            ).decode('utf-8')
        ))
    print(data)
    return data

class AuthorizedUserSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='user.name')
    email = serializers.EmailField(source='user.email')
    class Meta:
        model = AuthorizedUsers
        fields = ['id', 'email', 'name', 'company','user']
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
                
            },
            'user': {
                'required': False,
                'read_only':True,
            }
        }
    
    def create(self, validated_data):
        req = validated_data.pop('user')
        email =  req['email']
        name =  req['name']
        company = validated_data.get('company', None)
        if company is None:
            raise serializers.ValidationError({'detail':'Company is required','status':'error'})
        user = User(
            email=email,
            name=name,
            username=generate_unique_username([
                email,
                name,
                'authuser'
            ])
        )
        passo = User.objects.make_random_password()
        user.set_password(passo)
        user.save()
        print('saved')
        print(passo)
        authuser = AuthorizedUsers.objects.create(user=user,company=company)
        
        if passo is not None:
            mail = password_message(user,passo)
            send_mail('Welcome',
                "".join(mail),
                from_email='lscotland@odysseytrust.com',
                recipient_list=[user.email]
            )
        return authuser

class AccessCoordinatorSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='user.name')
    email = serializers.EmailField(source='user.email')
    
    class Meta:
        model = AccessCoordinator
        fields = ['id', 'email', 'name', 'company','user']
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
            },
            'user': {
                'required': False,
                'read_only':True,
            }
        }

        
    def create(self, validated_data):
        req = validated_data.pop('user')
        email = req['email']
        name = req['name']
        company = validated_data.get('company', None)
        if company is None:
            raise serializers.ValidationError({'detail':'Company is required','status':'error'})
        user = User(
            email=email,
            name=name,
            username=generate_unique_username([
                email,
                name,
                'authuser'
            ])
        )
        passo = User.objects.make_random_password()
        user.set_password(passo)
        user.save()
        print(passo)
        accessuser = AccessCoordinator.objects.create(user=user,company=company)
        
        if passo is not None:
            mail = password_message(user,passo)
            send_mail('Welcome', 
                "".join(mail),
                from_email='lscotland@odysseytrust.com',
                recipient_list=[user.email]
            )
        return accessuser

class EmployeeSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='user.name')
    email = serializers.EmailField(source='user.email')
    
    class Meta:
        model = Employee
        fields = ['id', 'email', 'name', 'title','sector','phone','user']
        extra_kwargs = {
            'name': {
                'required': True,
                'allow_blank': False,
            },
            'email': {
                'required': True,
                'allow_blank': False,
            },
            'user': {
                'required': False,
                'read_only':True,
            }
        }

        
        
    def create(self, validated_data):
        req = validated_data.pop('user')
        email = req['email']
        name = req['name']
        
        user = User(
            email=email,
            name=name,
            username=generate_unique_username([
                email,
                name,
                'employee'
            ]),
            is_staff=True
        )
        
        passo = User.objects.make_random_password()
        user.set_password(passo)
        user.save()
        print(passo)
        employee = Employee.objects.create(user=user,**validated_data)
        
        if passo is not None:
            mail = password_message(user,passo)
            send_mail(
                "".join(mail),
                from_email='lscotland@odysseytrust.com',
                recipient_list=[user.email]
            )
        return employee

class NotificationSerializer(serializers.ModelSerializer):
    #name = serializers.CharField(source='user.name')
    
    class Meta:
        model = Notification
        fields = ['id', 'title','user','read','date_created','date_updated']
        extra_kwargs = {
            '''name': {
                'required':False,
                'read_only': True,
                'allow_blank':True
            },'''
            'read': {
                'required': False,
            },
            'date_creted': {
                'read_only': True,
            },
            'date_updated': {
                'read_only': True,
                
            }
        }


class UserSerializer(serializers.ModelSerializer):
    authorizedusers = AuthorizedUserSerializer(read_only=True)
    accesscoordinator = AccessCoordinatorSerializer(read_only=True)
    employee = EmployeeSerializer(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'authorizedusers', 'accesscoordinator', 'employee']
        extra_kwargs ={
            'id':{
                'required':False
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
            'accesscoordinator_set':{
                'allow_blank': True,
                'required': False,
                'fields':{
                    'company':{
                        'required':False
                    }
                }
            },
            'authorizedusers_set':{
                'allow_blank': True,
                'required': False,
                'fields':{
                    'company':{
                        'required':False
                    }
                }
            }
        }
    def create(self, validated_data):
        access_coordinator=validated_data.pop('accesscoordinator_set')
        authorized_user = validated_data.pop('authorizedusers_set')
        company = Company.objects.create(**validated_data)
        Notification.objects.create(
            title='Firm account created for {0}, with OFAC {1}'.format(validated_data.get('name',''),validated_data.get('account_number','')),
            read=False
        )
        

        for i in access_coordinator:
            user=None
            passo=None
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
                passo = User.objects.make_random_password()
                user.set_password(passo)
                user.save()
            accessuser = AccessCoordinator.objects.create(user=user,company=company)
            
            if passo is not None:
                print(passo)
                mail = password_message(user,passo)
                send_mail('Welcome',
                    "".join(mail),
                    from_email='lscotland@odysseytrust.com',
                    recipient_list=[user.email]
                )
                #send_mail('Welcome', "Hi {0}, \n here is you auto generated password : {1} \n please endeavour to change it".format(user.name,passo), from_email='lscotland@odysseytrust.com', recipient_list=[user.email])
                #accessuser.save()
            #request = self._get_request()
            #setup_user_email(request, user, [])

        for i in authorized_user:
            passo=None
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
                passo = User.objects.make_random_password()
                user.set_password(passo)
                user.save()
                print('saved')
            authuser = AuthorizedUsers.objects.create(user=user,company=company)
            if passo is not None:
                mail = password_message(user,passo)
                send_mail('Welcome',
                    "".join(mail),
                    from_email='lscotland@odysseytrust.com',
                    recipient_list=[user.email]
                )
                
        return company


    def update(self,instance,validated_data):
        data = super().update(instance, validated_data)
        if validated_data.get('account_number',None) is not None:
            Notification.objects.create(
                title='Firm billing address for {0}  updated.'.format(instance['name']),
                read=False
            )
        return data

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