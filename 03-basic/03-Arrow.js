const user = {
    username:"shrey",
    price:999,
    welcomeMessage:function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }



}

// user.welcomeMessage()
// user.username="VVV"
// user.welcomeMessage()

// console.log(this);


// function tea() {
//     let Username="SSB"
//     console.log(this);
// }
// tea()


// const tea = () =>{
//     let Username="SSB"
//     console.log(this);
// }
// tea()


// const addThree = (num1,num2) => {
//     return num1+num2+3
// }


//implicit Return
// const addThree = (num1,num2) => (
//       num1+num2+3
// )

// const addThree = (num1,num2) => num1+num2+3


const addThree = (num1,num2) => (
      {username:"SV"}
)

console.log(addThree(2,3))