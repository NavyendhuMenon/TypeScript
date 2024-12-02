import * as readlineSync from 'readline-sync';

class Array2D {
  private array: number[][];

  constructor() {
    this.array = [];
  }

  public main() {
    this.getArray();
    this.displayArray();
  }

  private getArray() {
    const size = readlineSync.questionInt("Enter the size of the array: ");
    console.log("Enter the array values:");

    for (let i = 0; i < size; i++) {
      const row: number[] = [];
      for (let j = 0; j < size; j++) {
        const value = readlineSync.questionInt(`Enter value for element [${i}][${j}]: `);
        row.push(value);
      }
      this.array.push(row);
    }
  }

  private displayArray() {
    console.log("Array elements are:");
    for (const row of this.array) {
      console.log(row.join('\t'));
    }
  }
}

const array2D = new Array2D();
array2D.main();
