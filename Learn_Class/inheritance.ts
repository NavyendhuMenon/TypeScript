//inheritance


class Animal {

  protected eat():void {
        console.log("Iam eating")
    }
}


class Dog extends Animal{

    bark(): void {
        console.log("Iam barking");
        
    }

    eatFood() :void{
        this.eat()
    }
}


let myDog = new Dog()

myDog.eatFood()