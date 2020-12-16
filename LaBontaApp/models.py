from django.core.validators import RegexValidator
from django.db import models


# Create your models here.
class DownlodableItems(models.Model):
    item_header = models.CharField(max_length=35)
    item_to_download = models.FileField(upload_to='media/DownlodableItems', blank=True)
    to_download_file_name = models.CharField(max_length=10)


class FoodSection(models.Model):
    # section = models.CharField(max_length=10) #In Order to match the section and section_type must be Indentic when added to the db!
    CATEGORY = (
        ('Pizza', 'Pizza'),
        ('Pasta', 'Pasta'),
        ('Salad', 'Salad'),
        ('Drinks', 'Drinks'),
        ('Breakfast', 'Breakfast'),
        ('Appetizer', 'Appetizer'),
        ('Wine List', 'Wine List'),
        ('Meat', 'Meat')
    )
    food_category = models.CharField(max_length=15, choices=CATEGORY)

    def __str__(self):
        return self.food_category


# Populate Delivery Menu
class Delivery(models.Model):
    section_type = models.CharField(max_length=10)
    product = models.CharField(max_length=20)
    price = models.IntegerField(default=0)


# class Product(models.Model):
#     CATEGORY = (
#         ('Pizza','Pizza'),
#         ('Pasta','Pasta'),
#         ('Salad','Salad'),
#         ('Drinks','Drinks'),
#         ('Breakfast','Breakfast'),
#         ('Appetizer','Appetizer'),
#         ('Wine List','Wine List'),
#         ('Meat','Meat')
#     )
#     # section_type = models.CharField(max_length=200,choices=SECTION)
#     category = models.CharField(max_length=15,choices=CATEGORY)
#     name = models.CharField(max_length=20)
#     price = models.IntegerField(default=0)
#     portions = models.IntegerField(default=0)
#     date_created = models.DateTimeField(auto_now_add=True, null=True)
#
#     def __str__(self):
#         return self.name + "  x" + str(self.portions)

class Product(models.Model):
    CATEGORY = (
                ('Pizza','Pizza'),
                ('Pasta','Pasta'),
                ('Salad','Salad'),
                ('Drinks','Drinks'),
                ('Breakfast','Breakfast'),
                ('Appetizer','Appetizer'),
                ('Wine List','Wine List'),
                ('Meat','Meat')
            )
    # food_category = models.CharField(max_length=15, choices=CATEGORY)
    food = models.CharField(max_length=15, choices=CATEGORY,null=True)
    name = models.CharField(max_length=20)
    price = models.FloatField(default=0)

    def __str__(self):
        return self.name


class Order(models.Model):
    date_ordered = models.DateTimeField(auto_now_add=True, null=True)
    complete = models.BooleanField(default=False)
    transaction_id = models.CharField(max_length=100,null=True)

    def __str__(self):
        return str(self.id)

    @property
    def get_cart_total(self):
        orderitems=self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])  #Calculate all the totals and return them
        return total

    @property
    def get_cart_items(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])  # Calculate the total amount of the quantities of items
        return total


class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.SET_NULL,null=True)
    product = models.ForeignKey(Product,on_delete=models.SET_NULL,null=True)
    quantity = models.IntegerField(default=0,null=True,blank=True)
    date_added = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.product.name

    @property
    def get_total(self):
        total = self.product.price * self.quantity  # Calculate total for every prod
        return total


class Shipping(models.Model):
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True, blank=True)
    phone_no = models.CharField(max_length=13, validators=[RegexValidator(r'(\+355|0)((69)|(68)|(67))[0-9]{7}')],null=True)
    street_add = models.CharField(max_length=100, null=True)
    note = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.street_add


# Order
class TakeOrder(models.Model):
    STATUS = (
        ('U Pranua','U Pranua'),
        ('U Dergua','U Dergua'),
        ('U Refuzua','U Refuzua')
    )
    product = models.ManyToManyField(Product)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    status = models.CharField(max_length=50,choices=STATUS)


class BookEvent(models.Model):
    name = models.CharField(max_length=13)
    email = models.CharField(max_length=25 , validators=[RegexValidator(r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$')])
    phoneNo = models.CharField(max_length=13, validators=[RegexValidator(r'(\+355|0)((69)|(68)|(67))[0-9]{7}')])
    date = models.DateField()
    time = models.TimeField()
    no_of_people = models.PositiveIntegerField()

