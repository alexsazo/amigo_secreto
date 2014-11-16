from django.db import models
from datetime import datetime


class Registro(models.Model):
    person = models.CharField(max_length=50)
    def __unicode__(self):
        return self.person

class Messages(models.Model):
    text = models.TextField(max_length=144)
    person = models.CharField(max_length=30)
    pub_date = models.DateTimeField(default=datetime.now())

