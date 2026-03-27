from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLE_CHOICES = (
        ("user", "User"),
        ("admin", "Admin"),
    )

    full_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=30, blank=True)
    bio = models.TextField(blank=True)
    avatar = models.URLField(blank=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default="user")

    def __str__(self):
        return self.username
