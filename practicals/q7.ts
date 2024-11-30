
// Write a program to print the multiplication table of given numbers.


function multiplicationTable(value : number, limit : number) : void {

    for (let i =1; i<=limit ; i++){
        console.log(`${i} x ${value}  = ${value * i}`)
    }
}

multiplicationTable(5, 10)
    
