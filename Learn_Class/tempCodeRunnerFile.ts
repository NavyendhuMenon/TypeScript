class Calculator{

    add (a :number , b: number) :number ;
    add (a :string , b :string) :string;

    add (a: any , b: any): any{

        return a+b ;
    }

}


let calc = new Calculator()

console.log(calc.add(2,3));
console.log(calc.add("Hello", "World"));