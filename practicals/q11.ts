
//. Write a program to find the number of even numbers in an array




function findEven (arr :number[]) : number{

    return arr.filter ((num)=>num%2 ===0).length

}

let arr = [1,4,3,100,299]
console.log((findEven(arr)))