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


User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id',
        'name',
        'account_number',
        'access_coordinator',
        'authorized_users',
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
            }
        }
    def create(self, validated_data):
        access_coordinator=validated_data.get('access_coordinator')
        authorized_users = validated_data.get('authorized_users')
        for i in authorized_users:
            user = User(
                email=i.email,
                name=i.name,
                username=generate_unique_username([
                    i.email,
                    i.name,
                    'user'
                ])
            )
            #passo = User.objects.make_random_password()
            user.set_password('password')
            user.save()
            authuser = AuthorizedUsers(user=user)
            authuser.save()
            #request = self._get_request()
            #setup_user_email(request, user, [])

        for i in access_coordinator:
            user = User(
                email=i.email,
                name=i.name,
                username=generate_unique_username([
                    i.email,
                    i.name,
                    'user'
                ])
            )
            user.set_password('password')
            user.save()
            accessuser = AccessCoordinator(user=user)
            accessuser.save()
            #request = self._get_request()
            #setup_user_email(request, user, [])
        return validated_data

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


'''class AuthorizedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthorizedUsers
        fields = ['id', 'email', 'name']


class AccessCoordinatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessCoordinator
        fields = ['id', 'email', 'name']
'''

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']


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