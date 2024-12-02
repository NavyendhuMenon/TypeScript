import * as readlineSync from 'readline-sync';

function reverseStringAndCheckType(my_string: any): void {
  try {
    const reversedString = my_string.split('').reverse().join('');
    console.log(`Reversed string is : ${reversedString}`);
  } catch (err) {
    console.log(`Error`);
  } finally {
    console.log(`Type of my_string is : ${typeof my_string}`);
  }
}

const userInput = readlineSync.question('Enter a string: ');

reverseStringAndCheckType(userInput);
