from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from home.models import Company


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

class AuthorizedUsers(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE)
    company = models.ForeignKey(to=Company,on_delete=models.CASCADE)
    def __str__(self):
        return self.user.name

class AccessCoordinator(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE)
    company = models.ForeignKey(to=Company,on_delete=models.CASCADE)
    def __str__(self):
        return self.user.name
class Employee(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE)
    phone = models.CharField(_("phone number"), blank=True, null=True, max_length=255)
    title = models.CharField(_("title"), blank=True, null=True, max_length=255)
    sector = models.CharField(_("sector"), blank=True, null=True, max_length=255)
    
    def __str__(self):
        return self.user.name

class Notification(models.Model):
    title = models.CharField(max_length=255,blank=False,null=False)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    read = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_created=True,auto_now_add=True)
    date_updated = models.DateTimeField(auto_created=True, auto_now=True)
