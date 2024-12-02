import * as readlineSync from 'readline-sync';

function multiplyAdjacentValues(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] * arr[i + 1]);
  }
  return result;
}

const arrayLimit: number = parseInt(readlineSync.question('Enter the array limit: '), 10);

let array: number[] = [];
for (let i = 0; i < arrayLimit; i++) {
  const value: number = parseInt(readlineSync.question(`Enter value ${i + 1}: `), 10);
  array.push(value);
}

const resultArray: number[] = multiplyAdjacentValues(array);

console.log('Output');
console.log(resultArray.join('\t'));
