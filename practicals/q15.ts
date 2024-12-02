import * as readlineSync from 'readline-sync';

function main(): void {
    const arr: number[] = [];

    getArray(arr);

    displayArray(arr);
}

function getArray(arr: number[]): void {
    const size: number = parseInt(readlineSync.question("Enter the number of elements: "), 10);

    for (let i = 0; i < size; i++) {
        const value: number = parseInt(readlineSync.question(`Enter value for element ${i + 1}: `), 10);
        arr.push(value);
    }
}

function displayArray(arr: number[]): void {
    console.log("The array elements are:", arr);
}

main();
