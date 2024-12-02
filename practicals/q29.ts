

function myFilter(myArray: number[], callback: (num: number) => boolean): number {
  
    const sum = myArray.reduce((acc, curr) => acc + curr, 0)

    
    if (callback(sum)) {
        console.log(`The sum of the array is even: ${sum}`)
    } else {
        console.log(`The sum of the array is odd: ${sum}`)
    }

    return sum
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

const myArray = [1, 2, 3, 4, 5]

const result1 = myFilter(myArray, isEven);
console.log(`The sum of the array is: ${result1}`)
