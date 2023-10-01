const user = {
    username:"sv",
    loginCount :9,
    signedIn:true,
    getUserDetail:function(){
       // console.log("Got User Details from databse");
    //    console.log(this.username);
    console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetail());


function userO(username,loginCount,isLoggedin) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }


    //return this
}
const user1 = new userO("h",12,true)

console.log(user1.constructor);

const user2 = new userO("c",11,false)
console.log(user2);


//whenever new is used it creates new instance