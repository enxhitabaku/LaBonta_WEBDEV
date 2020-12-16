AOS.init();
$(document).ready(function(){
    console.log("Ready");//DEBUGING

    generateList()


    function validate(name,email,phoneNo,date,time,noOfPeople){
        if( (name & email & phoneNo & date & time & noOfPeople) )
        {
            return true;
        }else{
            return false
        }
    }

    //Close Button
    $('.close').click(function(){
        $(this).parent().parent().css('visibility', 'hidden');
        //$('body').css('overflow','auto')//Reset Scroll
    });

    /*Show Alert*/
    $('#newsletterIcon').click(function(){
        /*Check if email input has a value*/
        if( $('#newsletterEmail').length && $('#newsletterEmail').val().length ){
            $('.alertContainer').css('visibility','visible');
        }else{
            alert("Enter a valid email address");
        }
    });

    //BookEvent
    $("#bookTableButton").click(function(){
        $("#myModal").modal();
      });

    /*Order Now*/
    $("#orderNowButton").click(function(){
        $("#myOrderModal").modal();
    });

    
    let btnSubmit=document.querySelector("#Submit");
    let btnAdd=document.querySelector("#Prosciutto .fa-plus-circle");
    let btnSub=document.querySelector("#Prosciutto .fa-minus-circle");
    let quantity=document.querySelector('#Prosciutto input[type=number]');
    let price=$("#priceId").text();
    let product=$("#product").text();


        function sub(){
            if(quantity.value>0 & quantity.value!=null)
                quantity.value=parseInt(quantity.value)-1;
        }

        function add(){
            if(quantity.value!=null)
                quantity.value=parseInt(quantity.value)+1;
        }
        

        btnAdd.addEventListener("click", function(){
                add();
        });

        btnSub.addEventListener("click", function(){
                sub();
        });

        btnSubmit.addEventListener("click",function(){
            alert();
        });

});