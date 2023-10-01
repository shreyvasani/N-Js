const promise1 = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network

    setTimeout(function(){
        console.log("async part is done");
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("async 2 resolved");
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"tea",email:"a@a.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"abc",pass:"abc"})
        }
        else{
            reject('error something went wrong')
        }
    },2000)
})

promise4
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("finally the promise either resolved or rejected");
})



const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"js",pass:"abc"})
        }
        else{
            reject('js something went wrong')
        }
    },2000)
})

async function consumePromise5(){
  try{
    const response = await promise5
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
}

consumePromise5()



// async function getAllUser(){
//   try{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
    
//     const data= await res.json
//     console.log(data);
//   }catch(err){
//     console.log(err);
//   }
// }
//getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})