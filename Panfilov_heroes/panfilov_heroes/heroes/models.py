from django.db import models

class Hero(models.Model):
    last_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    patronymic = models.CharField(max_length=100)
    description = models.TextField() 
    photo = models.ImageField(upload_to='hero_photos/', null=True, blank=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
