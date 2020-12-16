AOS.init();
$(document).ready(function(){
    console.log("Ready");//DEBUGING

    let Order_Map=new Map();//To store product ordered and portions
    let totalSum=0;//To store total sum of the recipt

        $('.minus').click(function(){
            let btn_clicked = $(this);
            let Parent_div = btn_clicked.parent().parent().parent().parent();
            //console.log(Parent_div);
            let input = Parent_div.children(".input_div").children();
            //console.log(input);
            let input_value = input.val();
            input_value = parseInt(input_value);
            //console.log(input_value)


            if((input_value - 1)< 0)
                alert("No Negative values allowed")
            else{
                 input.val(parseInt(input_value-1));
                 let price = Parent_div.children(".price_div").children("span.price");
                 let total_price = Parent_div.children(".price_div").children("div").children(".totalPricePerProd");
                //console.log(price.text());
                //console.log(total_price.text());
                price = parseInt(price.text());

                let new_price = parseInt(total_price.text()) - price;
                total_price.text(new_price);

                if(input.val() < 1)
                    total_price.parent().hide();

                let product = btn_clicked.parent().parent().children(".products");//Get product
                //console.log(product.text());
                totalSum-=price;
                let prod_id = btn_clicked.data("product") //Get Prod ID
                // console.log(parseInt(prod_id))
                // let prod_action = btn_clicked.data("action")//Get Action if you want to manipulate qty in backend
                // console.log(prod_action)
                let qty = input.val() //Quantity

                if(qty == 0 && Order_Map.has( prod_id ) ){//If 0 portions and the product has existed in the list remove it
                    Order_Map.delete(prod_id);
                }else
                    Order_Map.set(prod_id,qty); //Update portions into the map

                //console.log(Order_Map);
                // updateUserOrder(prod_id,qty)
            }
        });
        $('.plus').click(function(){
            let btn_clicked = $(this);
            let Parent_div = btn_clicked.parent().parent().parent().parent();
            //console.log(Parent_div);
            let input = Parent_div.children(".input_div").children('input');
            //console.log(input);
            let input_value = input.val();
            input_value = parseInt(input_value);
            //console.log(input_value);
            input.val(parseInt(input_value+1));
            // console.log(input.val());

            let price = Parent_div.children(".price_div").children("span.price");
            let total_price = Parent_div.children(".price_div").children("div").children(".totalPricePerProd");
            //console.log(total_price.text());
            //console.log(price.text());

            price = parseInt(price.text());

            let new_price = input.val() * price;
            total_price.text(new_price);
            //console.log(new_price);
            total_price.parent().show();//Show the hidden total per prod

            let products = btn_clicked.parent().parent().children(".products");//Get product
            //console.log(products.text());
            totalSum+=price;
            //console.log(totalSum);

            let prod_id = btn_clicked.data("product") //Get Prod ID
            //console.log(parseInt(prod_id))
            // let prod_action = btn_clicked.data("action")//Get Action if you want to manipulate qty in backend
            //console.log(prod_action)
            let qty = input.val() //Quantity

            Order_Map.set(prod_id,qty); //Put the products and portions into the map
            // console.log(Order_Map);
            // updateUserOrder(prod_id,qty)
        });

         //Fetch Ajax Call //Add an action paramether if you want to manipulate the qty in backend
         function  updateUserOrder(productId, qty){ //AJAX CALL + CSRF TOKEN
            console.log("Sending Data")

            let url="/order_item/"

            fetch(url,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    // 'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
                    'X-CSRFToken': csrftoken,
                },
                // 'action': action, add this below if you want to manipulate the quantity in the backend
                body: JSON.stringify({'productId': productId, 'Qty':qty }) //Pass value to backend
            })
                .then(response => {
                    return response.json() //Convert response to JSON
                })
                .then(data => {
                    console.log('Data:', data)//Perform actions with the response data from the view
                    // location.reload()
                    // location.reload()
                })
        }
         //Make a method to read the map and fire the ajax call  need to work on
         $("#placeOrder_button").click(function(){
            changeHash("checkout")
            $('.modal-header').show();
            $("#checkout_modal").modal('show');

            for(let keys of Order_Map.keys()){
                for(let val of Order_Map.values()){
                    let id = keys
                    let qty = val
                     updateUserOrder(id,qty)
                }
            }
        });




    $( "#label_streetAdd" ).blur(function() {
        let input = $('label_streetAdd').val();
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(input))
            alert("Please enter a valid email address");
        else
            alert("Yes");
    });
    // (06[7-9]|6[7-9]|(\+|00)3556[7-9])\d{7})
    $( "#label_phoneNo" ).blur(function() {
        let input = $('label_phoneNo').val();
        let re = new RegExp('((06[7-9]|6[7-9])|(\\+|003556[7-9]))\\d{7}');
        if(!re.test(input))
            alert("Please enter a valid Phone address");

    });


    //Change the anchor of Url
    function changeHash(anchorURL){
            location.hash=anchorURL;
    }

    //Close Button
    $('.close').click(function(){
        $(this).parent().hide();
    });

    //BookEvent
    $("#bookTableButton").click(function(){
        changeHash("add_booking");
        $('.modal-header').show();
        $("#myModal").modal();
      });

    /*Order Now*/
    $("#orderNowButton").click(function(){
        $('.hideTotal').hide();//hide the total sum per prod

        changeHash("place_order");
        $('.modal-header').show();
        $("#myOrderModal").modal();
    });


    // $("#placeOrder_button").click(function(){
    //     changeHash("checkout")
    //     $('.modal-header').show();
    //     $("#checkout_modal").modal('show');
    // });


});
//
// function ValidateEmail(inputText)
//     {
//         var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//         if(inputText.value.match(mailformat))
//         {
//             alert("Valid email address!");
//             document.newsletterDiv.emailInput.focus();
//             return true;
//         }
//         else
//         {
//             alert("You have entered an invalid email address!");
//             document.newsletterDiv.emailInput.focus();
//             return false;
//         }
//     }