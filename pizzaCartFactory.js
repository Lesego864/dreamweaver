 module.exports = function PizzaCart(){

var theSmallTotal = 0;
var theMediumTotal = 0;
var theLargeTotal = 0;
var customerID = 0
let paymentVal;
var message = ""
var allOrders = [];
var orderID =1;


function createOrder(){
 //orderID++ 
 const order = {
   orderId : orderID++,
   status : "Payment due" ,
   amount : Number(theSmallTotal + theLargeTotal + theMediumTotal).toFixed(2),
   buttonStatus: "Pay",
}
 allOrders.push(order)
}

function getOrders(){
 return allOrders
}
function updtOrder(){
   const order2 = {
      orderId : orderID,
      status : "Paid" ,
      amount : Number(theSmallTotal + theLargeTotal + theMediumTotal).toFixed(2),
      buttonStatus: "Collect",
   }
   allOrders.push(order2)
}
function getUpdtOrders(){
   return allOrders
  }


  function collectOrder(){
   const order3 = {
      orderId : orderID,
      status : "Collected" ,
      amount : Number(theSmallTotal + theLargeTotal + theMediumTotal).toFixed(2),
      buttonStatus: "",
   }
   allOrders.push(order3)
}
function getCollectOrders(){
   return allOrders
  }



function payVal(value){
   paymentVal = Number(value.paymentVal)
}

function getValue(){
   return paymentVal
}

function payMessage(){
   var gtotal = grandTotalPizza();
   if (gtotal<=paymentVal){
      message ==="Enjoy your Pizza"
   }else if (gtotal>= paymentVal){
      message ==="Amount is not enough"
   }
} 

function getMessage(){
   return message
}

function customerIds(){
   customerID += 12.00
}

 function buySmallPizza(){
    theSmallTotal += 68.00
 }

 function buyMediumPizza(){
    theMediumTotal += 89.00
 }

 function buyLargePizza(){
    theLargeTotal += 129.00
 }

function addSmallPizza(){
   theSmallTotal += 68.00
}
function addMediumPizza(){
   theMediumTotal += 89.00
}
function addLargePizza(){
   theLargeTotal += 129.00
}


function minusSmallPizza(){
   if(theSmallTotal>0){
   theSmallTotal -= 68.00}
}
function minusMediumPizza(){
   if(theMediumTotal>0){
   theMediumTotal -= 89.00}
}
function minusLargePizza(){
   if(theLargeTotal>0){
   theLargeTotal -= 129.00}
}

function customerIdea(){
   return customerID;
}

 function smallPizzaTotal(){
    return theSmallTotal.toFixed(2)
 }
 function mediumPizzaTotal(){
   return theMediumTotal.toFixed(2)
}
function largePizzaTotal(){
   return theLargeTotal.toFixed(2)
}
function grandTotalPizza(){
   return Number(theSmallTotal + theLargeTotal + theMediumTotal)
}

function checkout(){
   row1.classList.toggle("hidden")
}



function action (actionType){
if ( actionType >= grandTotalOne.innerHTML ){
   row2.classList.remove("hidden");
      row3.classList.add("hidden");

      setTimeout(function(){

         row2.classList.add("hidden");
 
         smallTotalOne.innerHTML="0.00";
         mediumTotalOne.innerHTML="0.00"
         largeTotalOne.innerHTML="0.00"
         grandTotalOne.innerHTML="0.00"
         
            },5000)
} 
   else if(inputAmount <= grandTotalOne.innerHTML){
   row3.classList.remove("hidden");
   row2.classList.add("hidden");

   setTimeout(function(){
       row3.classList.add("hidden");
          },5000)
} 

}

 return {
   getMessage,
   payMessage,
   payVal,
   getValue,
   customerIds,
   customerIdea,
     buySmallPizza,
     buyMediumPizza,
     buyLargePizza,
     smallPizzaTotal,
     mediumPizzaTotal,
     largePizzaTotal,
     addSmallPizza,
     addMediumPizza,
     addLargePizza,
     minusSmallPizza,
     minusMediumPizza,
     minusLargePizza,
     grandTotalPizza,
     checkout,
     action,
     createOrder,
     getOrders,
     getUpdtOrders,
     updtOrder,
     collectOrder,
     getCollectOrders
 }
 }