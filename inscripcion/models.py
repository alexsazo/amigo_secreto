from django.db import models



class Registro(models.Model):
    person = models.CharField(max_length=50)
    def __unicode__(self):
        return self.person