

//Write a program to sort an array in descending order


function descendingOrder (arr :number[]): number[]{

    return arr.sort((a,b)=>a-b)
}


let arr1=[1,0,2,33,445,11]

console.log(descendingOrder(arr1))

