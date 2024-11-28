


//interaces


interface user {
    name : String,
    age : Number
}

let user1 : user = {name : "nav", age : 25}



//methods in interfaces

interface Hi {
    name : string,
    greet(): string
}


let user2 : Hi ={

    name : "Navyendhu",
    greet : () => `Hello ${user2.name}`
}

console.log(user2.greet())


//extends in interface


interface person1 {
    name : string,
    age : Number
}


interface Employee extends person1 {

    emp_id : Number,
    dept : String
}


let employee : Employee = {
    name : 'nav',
    age : 25,
    emp_id :1,
    dept : "IT"
}


console.log(employee);
