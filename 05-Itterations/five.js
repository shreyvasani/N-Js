const coding = ["js","ruby","python","cpp"]

// coding.forEach(    function (item){
//     console.log(item);
// } )


// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(printMe){
//     console.log(printMe);
// }

// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item);
//     console.log(index);
//     console.log(arr);
// })


const myCode = [
    {
        language_name:"javascript",
        language_file:"js"
    },
    {
        language_name:"java",
        language_file:"java"
    },
    {
        language_name:"python",
        language_file:"py"
    }
]

myCode.forEach((val)=>{
    console.log(val.language_name);
})