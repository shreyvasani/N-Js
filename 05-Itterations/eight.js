const myNums = [1,2,3]

// const initVlaue = 0;
// const myTotal = myNums.reduce((acc,curVal)=>{
//         console.log(`Acc ${acc} and curVal ${curVal}`);
//         return acc + curVal
// },0)


const myTotal = myNums.reduce((acc,curVal)=>acc+curVal,0)
console.log(myTotal);



const shoppingCart = [
    {
        itemName:"js",
        price:3000
    },
    {
        itemName:"Python",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:9999
    },
    {
        itemName:"Data Science",
        price:12999
    }
]

const Price = shoppingCart.reduce((acc,cur)=>acc+cur.price,0)

console.log(Price);