from django.db import models

class Skill(models.Model):
    name = models.CharField("Name", max_length=32)

    def __str__(self) -> str:
        return self.name

class Social(models.Model):
    name = models.CharField("Name", max_length=32)
    url = models.CharField("URL", max_length=60)
    icon = models.ImageField()

    def __str__(self) -> str:
        return self.name

class Project(models.Model):
    name = models.CharField("Name", max_length=60)
    url = models.CharField("URL", max_length=60)
    description = models.CharField("Description", max_length=500)
    image_path = models.ImageField()
    image_alt_text = models.CharField("Image alt text", max_length=120)
    skills = models.CharField("Skills List", max_length=500)

    def __str__(self) -> str:
        return self.name