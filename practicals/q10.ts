

function swapArray (arr1 :number[], arr2 : number []) : void {

    [arr1, arr2] = [arr2, arr1]

    console.log('Arrays after swapping:');
    console.log('Array1:', arr1);
    console.log('Array2:', arr2);
}


let array1 = [10, 20, 30, 40, 50];
let array2 = [15, 25, 35, 45, 55];

swapArray(array1, array2)