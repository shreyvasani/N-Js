function SaymyName() {
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("y");
}

//SaymyName();

// function addTwoNumber(number1,number2) {
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2) {
    // let results = number1+number2
    return number1+number2;
}

const result = addTwoNumber(2,5)

// console.log(result)

function loginusermessage(username="Sam") {
    if(!username ){
        console.log("Please Entre Username");
        return;
    }
    return `${username} just loggedin`
    
}
//console.log(loginusermessage("Hitesh"));
// console.log(loginusermessage());
// console.log(loginusermessage("SV"));



