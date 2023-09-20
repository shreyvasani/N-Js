const tinder = new Object() //using constructor singleton

tinder.id = "123abc"
tinder.name="Sam"
tinder.isLoggedin=false


// console.log(tinder);
const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            fName: "shrey",
            Lname:"vasani"
        }
    },
}

//console.log(regularUser.fullName.userfullname.fName);


const obj1= {
    1:"a",
    2:"b"
}

const obj2= {
    3:"c",
    4:"d"
}

// const obj3 =Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email;

// console.log(tinder)
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty('isLoggedin'));



const Course = {
    CourseName:"Js",
    Price:"999",
    CourseTeacher:"hitesh sir"
}

// console.log(Course.CourseTeacher);

const { CourseTeacher } = Course
const { CourseTeacher : teacher } = Course

console.log(teacher);



// {
//     "name":"shrey",
//     "course":"js",
//     "price":"free"
// }
