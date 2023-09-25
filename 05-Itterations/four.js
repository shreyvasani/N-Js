const myObject = {
    js:'Javascript',
    cpp:'C++',
    rb: 'ruby',
    swift:'Swift By Apple'
}

//for in

for(const key in myObject){
    // console.log(`${key} is Shortcut For ${myObject[key]}`);
}


const myArr = ["Js","ruby","python","cpp"]

for (const key in myArr) {
    // console.log(myArr[key]);
}


//map is not itteratable so for in loop can not print map
// const map = new Map()
// map.set("In","India")
// map.set("Usa","America")
// map.set("fr","france")
// map.set("In","India")

// for (const key in map) {
//    console.log(key);
// }