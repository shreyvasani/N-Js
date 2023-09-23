//for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

// const greetings = "Hello World"
// for (const greet of greetings) {
//         console.log(`each char is ${greet}`);
// }

// const greetingss = "Hello World"
// for (const greet of greetingss) {
//         if(greet == " "){
//             continue;
//         }
//         console.log(`each char is ${greet}`);
// }


//maps

const map = new Map()
map.set("In","India")
map.set("Usa","America")
map.set("fr","france")
map.set("In","India")

for( const [key,value] of map){
        console.log(key);
        console.log(value);
}
// console.log(map);

const myObje = {
    'Game1':'NFS',
    'Game2':'Spiderman'
}
for (const [key,val] of object) {
    
}