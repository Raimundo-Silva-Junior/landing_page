from django.urls import path, include
from .views import home, index

urlpatterns = [
    path('', index, name="index"),
    path('home/', home, name="home")
]