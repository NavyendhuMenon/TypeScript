// Function that does not return a value
function logMessage(message: string){
  console.log(message); // Side-effect only
}

let result: void = logMessage("Hello, TypeScript!"); // `result` is undefined

console.log(result)



function getGreeting(name: string){
    return `Hello, ${name}!`;
  }
  
  const greeting = getGreeting("Alice");
  console.log(greeting); // Output: Hello, Alice!
  