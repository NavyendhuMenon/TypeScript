import * as readlineSync from 'readline-sync';

class Calculator {
  addition(a: number, b: number): number {
    return a + b;
  }

  subtraction(a: number, b: number): number {
    return a - b;
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      console.log('Error: Division by zero is not allowed.');
      return NaN;
    }
    return a / b;
  }
}

function main(): void {
  const calculator = new Calculator();
 
  while (true) {
    console.log('\nMenu:');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Exit');
   
    const choice: number = parseInt(readlineSync.question('Enter your choice (1-5): '), 10);
   
    if (choice === 5) {
      console.log('Exiting...');
      break;
    }

    if (choice < 1 || choice > 5) {
      console.log('Invalid choice. Please select a number between 1 and 5.');
      continue;
    }
   
    const num1: number = parseFloat(readlineSync.question('Enter the first number: '));
    const num2: number = parseFloat(readlineSync.question('Enter the second number: '));

    let result: number;

    switch (choice) {
      case 1:
        result = calculator.addition(num1, num2);
        console.log(`Result: ${num1} + ${num2} = ${result}`);
        break;
      case 2:
        result = calculator.subtraction(num1, num2);
        console.log(`Result: ${num1} - ${num2} = ${result}`);
        break;
      case 3:
        result = calculator.multiplication(num1, num2);
        console.log(`Result: ${num1} * ${num2} = ${result}`);
        break;
      case 4:
        result = calculator.division(num1, num2);
        if (!isNaN(result)) {
          console.log(`Result: ${num1} / ${num2} = ${result}`);
        }
        break;
    }
  }
}


main();
