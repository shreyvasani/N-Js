//Singleton



//Object.create

//Object Literals

const mySym = Symbol("key1");
const jsUser = {
    name:"hitesh",
    "Full Name":"shrey vasani",
    [mySym]:"mysym1",
    age:18,
    Location:"bvn",
    email:"a@google.com",
    isLoggedin: false,
    lastLoginDays:["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);



// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);


jsUser.email="b@b.com"
// Object.freeze(jsUser)
// jsUser.email="b@ms.com"

// console.log(jsUser)

jsUser.greeting = function name() {
    console.log("Hello Js User")
}

jsUser.greeting2 = function name() {
    console.log(`hello Js User,${this.name} `)
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());