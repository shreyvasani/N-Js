const Name = "Shrey"
const RepoCount = 100

// console.log(Name + RepoCount);


console.log(`hello my name is ${Name} and My Repo Count is ${RepoCount}`);



const myName = new String("Hello");
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('o'));
const NewString = myName.substring(0,4);
console.log(NewString);

const anotherString = myName.slice(-3,4);
console.log(anotherString);

const newS1 = "      Hitesh     "
console.log(newS1)
console.log(newS1.trim())


const url = "https://shrey.com/Shrey%20Vasani"

console.log(url.replace('%20','-'));

console.log(url.includes('shrey'));

const stringOk = new String('Hii-ji-hello');

console.log(stringOk.split('-'))