import * as readlineSync from 'readline-sync';

function main(): void {
  const size: number = parseInt(readlineSync.question('Enter the size of array: '), 10);

  console.log('Enter the values of array 1:');
  const array1: number[][] = getArray(size);
 
  console.log('Enter the values of array 2:');
  const array2: number[][] = getArray(size);

  const resultArray: number[][] = addArray(array1, array2);

  console.log('Sum of array 1 and array 2:');
  displayArray(resultArray);
}

function getArray(size: number): number[][] {
  const array: number[][] = [];
  for (let i = 0; i < size; i++) {
    const row: number[] = readlineSync
      .question(`Enter row ${i + 1} values separated by spaces: `)
      .split(' ')
      .map(Number);
    array.push(row);
  }
  return array;
}

function addArray(array1: number[][], array2: number[][]): number[][] {
  const size = array1.length;
  const result: number[][] = [];

  for (let i = 0; i < size; i++) {
    const row: number[] = [];
    for (let j = 0; j < size; j++) {
      row.push(array1[i][j] + array2[i][j]);
    }
    result.push(row);
  }

  return result;
}

function displayArray(array: number[][]): void {
  array.forEach(row => {
    console.log(row.join('\t'));
  });
}


main();
