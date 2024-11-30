// 1. Accept a char input from the user and display it on the console.

function acceptChar(character: string): string {

    if (character.length === 1) {
      return `You entered: ${character}`
    } else {
      return 'Error: Please enter only one character.'
    }

}
  

console.log(acceptChar("N"))  
console.log(acceptChar("Nav"))