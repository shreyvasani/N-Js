const userEmail = []

if(userEmail){
    console.log("got user Email");
}
else{
    console.log("dont have user email");
}   

// falsy value: false, 0 , -0 ,bigint 0n,"", null, undefined,NaN

//else everything is truthy value and also :"0","false"(cause inside string)," "(cause blank space),[],{},function(){} (this called empty function)

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }
const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");

}