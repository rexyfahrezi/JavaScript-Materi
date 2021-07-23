// synchronous

// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }
 
// const coffee = orderCoffee();
// console.log(coffee)


// ----------------------------------------------------------------------------
// Asynchronous Callback
const orderCoffee = (callback) =>{
    let coffe = null;
    console.log("Sedang membuat kopi, silahkan tunggu. . .");
    setTimeout(() => {
        coffe = "Kopi sudah jadi!";
        callback(coffe)
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});

