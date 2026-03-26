const cart=["shoes","pants","kurta"];

const promise=createOrder(cart);    //orderid
console.log(promise);
promise.then( function (orderId) {
    console.log(orderId);
    return orderId;
    
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message);
})
.then(function (orderId){
    console.log("No matter what happens, i will definietely be called");
})

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        // createOrder
        // validatecard
        // orderId
        if(!validatecard(cart)){
            const err=new Error("cart is not valid");
            reject(err);
        }
        // logic for createorder
        const orderId="12345";
        if(orderId){
            setTimeout( function(){
                 resolve(orderId);
            },5000);
           
        }
    });
    return pr;
}
 function validatecard(cart) {
    return false;
};
function proceedToPayment(orderId){
    return new Promise( function(resolve,reject){
        resolve("Payment Successful");
    })
}