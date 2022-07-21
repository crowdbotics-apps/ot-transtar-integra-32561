from home.models import Company
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import permissions, filters

from rest_auth.serializers import LoginSerializer

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    queryset= Company.objects.all()
    serializer_class = SignupSerializer
    http_method_names = ["post","get","patch","delete"]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name','street_address','street_address_two','city','state','postal','account_number']

    def get_permissions(self):
        if self.action == 'list':
            self.permissions_classes = [permissions.IsAdminUser]
        return [permission() for permission in self.permissions_classes]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})
