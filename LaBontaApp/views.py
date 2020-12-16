from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.utils.datastructures import MultiValueDictKeyError
from django.http import JsonResponse
import json

from LaBontaApp.models import *


def work(request):
    return render(request, 'html/work_with_us.html')


def home(request):
    delivery = Product.objects.all().order_by('price')
    to_download = DownlodableItems.objects.all()
    food_section = FoodSection.objects.all()
    order, created = Order.objects.get_or_create(complete=False)
    item = order.orderitem_set.all()
    context = {'delivery': delivery, 'download': to_download, 'food_section': food_section, 'item': item, 'order': order}
    return render(request, 'index.html', context)



def add_bookings(request):
    if request.method == "GET":
        return render(request, 'index.html')
    #Add User Credentials To DB
    if request.method == "POST":
        user_name = request.POST['name']
        user_email = request.POST['email']
        user_phoneNo = request.POST['phoneNo']
        booking_date = request.POST['date']
        booking_time = request.POST['time']
        try:
            people_no = request.POST['no_of_people']
        except MultiValueDictKeyError:
            people_no = False

        booking = BookEvent(
            name=user_name,
            email=user_email,
            phoneNo=user_phoneNo,
            date=booking_date,
            time=booking_time,
            no_of_people=people_no
        )
        booking.save()
        #Send Email With The User Credentials
        email = EmailMessage(
            'A New Booking Has Arrived',
            'Name: ' + user_name + "\n"
            + "Phone No: " + user_phoneNo + "\n"
            + "Email: " + user_email + "\n"
            + "Date: " + booking_date + "\n"
            + "Time: " + booking_time + "\n"
            + "No of People: " + people_no,
            'enxhi.tabaku@gmail.com', #From
            ["enxhi.tabaku@gmail.com"] #To
        )
        email.send()

        return redirect('home')


def place_order(request):
    if request == 'GET':
        return render(request,'index.html')
    #Add Order To DB
    if request.method == 'POST':
        user_product = request.POST['product']
        user_quantity = request.POST['portions']
        user_price = request.POST['price']

        order = TakeOrder(
            product=user_product,
            portions=user_quantity,
            price=user_price

        )
        order.save()

        return redirect('home')


def updateItem(request):
    data = json.loads(request.body)     # Query the data
    productId = data['productId']     # Grab the value
    # action = data['action']    # Get the action of that value if you will manipulate the quanitity in backend
    qty = data['Qty']
    qty = int(qty)

    # print('Action', action)
    # print('ID', productId)
    # print('QTY:', qty)
    # Get product based on the id
    product = Product.objects.get(id=productId)
    # print('Prod: ',product)
    order, created = Order.objects.get_or_create(complete=False)
    # print("Order: ",order)
    orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)
    # print(orderItem)

    if qty > 0:
        orderItem.quantity = qty
    elif qty == 0:
        orderItem.delete()

    orderItem.save()

    print('Order Item:', orderItem, "Order QTY: ", orderItem.quantity)
    # For adding and substracting prod in backend not in js
    # if action == 'add':
    #     orderItem.quantity = (orderItem.quantity + 1)
    # elif action == 'remove':
    #     orderItem.quantity = (orderItem.quantity - 1)
    # print('Order Item:', orderItem,"Order QTY: ",orderItem.quantity)
    # if orderItem.quantity <= 0:
    #     orderItem.delete()

    return JsonResponse('Item Was Added', safe=False)
