from django.contrib import admin

# Register your models here.
from LaBontaApp.models import *

admin.site.register(Delivery)
admin.site.register(DownlodableItems)
admin.site.register(BookEvent)
admin.site.register(FoodSection)
admin.site.register(TakeOrder)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Shipping)
