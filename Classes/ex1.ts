

//basic classes in ts 


class Person {
    name : string;
    age : number;

    constructor(name : string, age :number){
        this.name = name;
        this.age = age;
    }

    greet() : void {
        console.log(`My name is ${this.name} and iam ${this.age}`)
    }
}

let person1 = new Person ("Navyedhu", 25)

person1.greet()