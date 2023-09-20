//var c = 300 
let a =300
if(true){
    let a = 10;
    const b  = 20;
    // console.log("inner");
    // console.log(a);
}

// console.log(a);
// console.log(b);


function One() {
    const username ="Shrey";

    function Two() {
        const website = "YT"
        console.log(username);
    }
    // console.log(website);
    Two()
}
//One();
if(true){
    const username = "SV"
    if(username == "SV"){
        const website = " TV"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ################### INTERSTING ################
console.log(addOne(3));
function addOne (value) {
    return value+1;
}

// addOne(3);
// console.log(addTwo(3));//this wont be executed
const addTwo= function(num) {
    return num + 2
}
addTwo(2)