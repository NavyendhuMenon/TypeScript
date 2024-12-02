//check given number is prime or not 

import * as readlineSync from 'readline-sync';


function checkPrime():void {
    const num : number = parseInt(readlineSync.question("Enter a number:"),10)


    
    if (num < 2) {
        console.log(`Entered number ${num} is not a Prime number`);
        return
    }

    let isPrime = true

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        console.log(`Entered number ${num} is a Prime number`)
    } else {
        console.log(`Entered number ${num} is not a Prime number`)
    }
}

checkPrime()





