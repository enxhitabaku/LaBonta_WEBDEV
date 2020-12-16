"""djangoProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from LaBontaApp import views
from LaBontaApp.views import *
from djangoProject import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('', home, name="about"),
    path('', home, name="menu"),
    path('', home, name="contact"),
    path('', home, name="booking"),
    path('home/', home, name="home"),
    path('work/', work,name='work'),
    path('home/work/', work,name='work'),
    path('place_order/', place_order, name='place_order'),#to be worked in this section on views.py , for placing the order !
    # path('checkout/', cart, name='checkout'),
    path('add_booking/', add_bookings, name="#add_booking"),
    path('order_item/', updateItem, name='update_item'),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
