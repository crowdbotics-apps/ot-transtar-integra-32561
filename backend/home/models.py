from django.db import models
#from users.models import AccessCoordinator, AuthorizedUsers
#from django.contrib.auth import get_user_model

#User = get_user_model()
class Company(models.Model):
    name = models.CharField(max_length=255,blank=False,null=False)
    account_number = models.CharField(max_length=255,blank=False,null=False)
    street_address = models.CharField(max_length=255, blank=True, null=True)
    street_address_two = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    state = models.CharField(max_length=255, blank=True, null=True)
    postal = models.CharField(max_length=10, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    def __str__(self):
        return self.name