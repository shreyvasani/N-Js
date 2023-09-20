//************Immediately Invoked Function Expression */


(function tea() {

    //named IIFE
    console.log("DB DONE");
})();

( (name)=>{
    console.log(`db connected two ${name}`);
})("hitesh")