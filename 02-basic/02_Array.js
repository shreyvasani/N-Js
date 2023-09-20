
const marvel_array = ["Thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

//marvel_array.push(dc);
// console.log(marvel_array)
// console.log(marvel_array[3][1])

// const All_heros = marvel_array.concat(dc)
// console.log(All_heros);

const All_heros = [...marvel_array,...dc]
// console.log(All_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_Array = another_array.flat(Infinity)
// console.log(real_Array);

console.log(Array.isArray("shrey"));
console.log(Array.from("shrey"));
console.log(Array.from({name:"shrey"})); //Intersting 


let Score_1 = 100
let Score_2 = 200
let Score_3 = 300

console.log(Array.of(Score_1,Score_2,Score_3));
