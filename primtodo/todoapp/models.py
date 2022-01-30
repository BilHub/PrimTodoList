from django.db import models

class Primtodo(models.Model):
    task = models.CharField(max_length=200)
    isCompleted = models.BooleanField(default=False)

