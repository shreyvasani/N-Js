let myName = "shrey       "
// console.log(myName.trueLength());


let myHero=['thor','spiderman']
let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy powe is ${this.spiderman}`);
    }
}
Object.prototype.shrey = function(){
    console.log(`shrey is in all object`);
}

Array.prototype.heyShrey = function(){
    console.log(`I am heyShrey`);
}
// heroPower.shrey()
myHero.shrey()
myHero.heyShrey()
// heroPower.heyShrey()


//inheritance

const user ={ 
    username:"sh",
    email:"e@e.com"
}

const Teacher = {
    makeVideo :true,

}

const TeachingSupport={
    isAvailable:false
}

const TAsupport = {
    makeAssingment:"js assing",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user


//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let AnotherUserName = "ABC     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
   
    console.log(`true length is ${this.trim().length}`)
}
AnotherUserName.trueLength()

"shrey  ".trueLength()
"Ice      ".trueLength()