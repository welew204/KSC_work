from django.contrib import admin

from .models import WallPost
from .models import City

admin.site.register(WallPost)

class CityAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}

admin.site.register(City, CityAdmin)
