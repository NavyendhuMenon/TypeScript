

abstract class Animal2 {
    
    // abstract makeSound() : void ;


    move (): void {

        console.log("The animal is moving")
    }
}


class Cat1 extends Animal2 {

    makeSound(): void {
        console.log("Meow..meowww");
        
    }
}

class Dog1 extends Animal2{

    makeSound(): void {
        console.log("Bow...Boww")
    }
}


let dogg = new Dog1()

dogg.makeSound()
dogg.move()