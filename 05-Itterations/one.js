//for 



for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 was here");
    }
    
    //console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outerloop ${i}`);
    for (let j = 1; j <= 10; j++) {
    // console.log(`innerloop ${j} and index in innerloop ${i}`);

    //console.log(i + "*" + j + "=" + i*j)
        
        
    }
    
}

const myArray = ["flash","batman","superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    
    const element = myArray[index];
    // console.log(element);
}

//break and continue 

// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {
//         console.log("5 is here");
//         break;
//     }
//     console.log(`value of ${index}`);
    
// }

//continue

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("5 is here");
        continue
    }
    console.log(`value of ${index}`);
    
}


