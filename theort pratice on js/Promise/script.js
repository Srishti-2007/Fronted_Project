const cart=["shoes","pants","kurta"];
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId, function (paymentInfo){
//         showOrderSummary(paymentInfo, function(){
//             updateWalletBalance();
//         });
//     });
// })
const promise=createOrder(cart);    //orderid
promise.then( function (orderId) {
    console.log(orderId);
    // return proceedToPayment(orderId);
// })
// .then( function (paymentInfo) {
//    return showOrderSummary(paymentInfo);
// })
// .then( function (paymentInfo){
//    return updateWalletBalance(paymentInfo);
})

// producer
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
            resolve(orderId);
        }
    });
    return pr;
}
 function validatecard(cart) {
    return true;
};