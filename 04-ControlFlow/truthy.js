// const userEmail = []

// if(userEmail){
//     console.log("got user Email");
// }
// else{
//     console.log("dont have user email");
// }   

// falsy value: false, 0 , -0 ,bigint 0n,"", null, undefined,NaN

//else everything is truthy value and also :"0","false"(cause inside string)," "(cause blank space),[],{},function(){} (this called empty function)

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }
// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log("object is empty");

// }



// Nullish coalescing Operator (??):null undefined


// let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1=undefined ?? 15


// val1 = null ?? 10 ?? 15 ;
// console.log(val1);


// terniary opeartor
// condition ? true :false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("lessthan 80") : console.log("more than 80");