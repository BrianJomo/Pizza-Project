    var form = document.querySelector("#form")
    form.addEventListener("submit",function (e) {
    e.preventDefault()
    var name = $("input#name").val();
    var flavor = $("#pizza-flavor").val();
    var size = $("#pizza-size").val();
    var crust = $("#pizza-crust").val();
    var number = $("#pizza-number").val();
    var toppings = [];
    console.log(`${name} ${flavor} ${size} ${crust} ${number}  `)

     $.each($('input[name="toppings"]:checked'),
        function() {
            toppings.push(this.value);
        });
      
    var sizeCost; 
    if (flavor === "Meat" || flavor === "cheese" || flavor === "peperoni" ) {
        if (size === "Small") {
            sizeCost = 400;
           
        } else if (size === "Medium") {
            sizeCost = 650;
        } else if (size === "Large") {
            sizeCost = 900;
            return true
        } 
    }   
     else if (flavor === "Mushroom" ||flavor === "Margharita" || flavor === "vegan" ) {
        if (size === "Small") {
            sizeCost = 450;
           
        } else if (size === "Medium") {
            sizeCost = 700;
        } else if (size === "Large") {
            sizeCost = 950;
        }
    }
    console.log(sizeCost) 
    var crustCost; 
    if (crust === "Sicilian ") {
        crustCost = 230;
    } else if (crust === "Pan") {
        crustCost = 180;
    } else if (crust === "Stuffed") {
        crustCost = 250;
    } else if (crust === "Thin") {
        crustCost = 100;
    }else{
        return false;
    }
    console.log(crustCost,  sizeCost)
    var checkboxes = $('input[name="toppings"]:checked').length;
   
    if (checkboxes <= 3) { 
        if (size === "Small") {
            var toppingsCost = checkboxes * 70;
        } else if (size === "Medium") {
            var toppingsCost = checkboxes * 100;
        } else if (size === "Large") {
            var toppingsCost = checkboxes * 130;
        }
        $("input[type='checkbox']:not(:checked)").prop({ 
            disabled: true
        }); 
        $('#placeorder').prop('disabled', true); 
        $("#yourorder").show();
        console.log(crustCost,  sizeCost, toppingsCost )
        var price = (sizeCost + crustCost + toppingsCost);
        var totalPrice = parseInt(price * number);
        $(".salutation").text("Hey" + " " + name + ". Here's your order:");
        $(".pizza-size").append('<tr><td id="pizza-size">' + size);
        $(".number").append('<tr><td id="number">' + number);
        $(".pizza-crust").append('<tr><td id="pizza-crust">' + crust);
        $(".pizza-flavor").append('<tr><td id="pizza-flavor">' + flavor);
        $(".pizzaTotal1").append('<tr><td id="pizzaTotal1">' + totalPrice);
        arrayTotal.push(totalPrice);
        if (toppings == "") {

            $(".toppings").append('<tr><td id="pizza-toppings">' + "-");
        }
        if (toppings != "") {
            $(".toppings").append('<tr><td id="pizza-toppings">' + toppings);
         
        }
        $(".name").text(name);
    } else {
        document.getElementById("maximum").innerHTML = "Please select a maximum of 3!";
        document.getElementById("maximum").style.cssText = 'color:red !important' 
    }
     
  
}); 
function makeDelivery() {
    $("#deliveryConfirmation").show();
    var location = ($("input#location").val());
    var phone = $("input#phone").val();
    $(".location").text(location);
    $(".phone").text(phone);
    $("#delivery").hide();
  }
 
  $(document).ready(function() {
    $("#orders").submit(function(event) {
        event.preventDefault();
        placeOrder();
    });
    $("#deliveryDetails").submit(function(event) {
        event.preventDefault();
        makeDelivery();
    });
  });
  
  function cancelOrders() {
    location.reload(); 
  }
  
  var arrayTotal = []; 
  
  function deliveryOptions() {
    $("#deliveryOptions").show();
    $("#orderDetails").hide();
    document.getElementById("orders").reset(); 
    $('#placeorder').prop('disabled', false); 
    var checkoutTotal = 0;
    arrayTotal.forEach(function(index) {
        checkoutTotal = checkoutTotal + index;
    });
    $(".totalPick").text(checkoutTotal);
    var checkoutTotalDel = checkoutTotal + 200; 
    $(".totalDel").text(checkoutTotalDel);
    
  }
  
  function pickUp() {
    $("#pickUpConfirmation").show();
    $("#yourorder").hide();
  }
  
  function deliver() {
    $("#delivery").show();
    $("#yourorder").hide();
  }
  
  function reloadPage() {
    location.reload(); 
  }
  
  function clearTextarea() {
    $("#messageForm").reset(); 
  }
  
  function addOrder() {
    $('#placeorder').prop('disabled', false); 
    $("input[type='checkbox']").prop({ 
        disabled: false
    });
    $("input[type='checkbox']").prop({ 
        checked: false
    });
  } 