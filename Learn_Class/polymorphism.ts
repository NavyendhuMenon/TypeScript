

// compile time polymorphism (method overloading)


// class Calculator{

//     add (a :number , b: number) :number ;
//     add (a :string , b :string) :string;

//     add (a: any , b: any): any{

//         return a+b ;
//     }

// }


// let calc = new Calculator()

// console.log(calc.add(2,3));
// console.log(calc.add("Hello", "World"));



//run time compilation (method overriding )



class Animals {

    makeSound (): void {
        console.log("Some genric sound");
        
    }
}

class Cat extends Animals{

    makeSound () : void {
        console.log("Meow...Meow...!!!")
    }
}

class Dogs extends Animals{
    makeSound() :void {
        console.log("Bow...Boww....!!!");
        
    }
}


function createSound (animal :Animals) :void {

    animal.makeSound()

}


let dog = new Dogs()
let cat = new Cat()
let generic = new Animals()

createSound(cat)
createSound(generic)
createSound(dog)


