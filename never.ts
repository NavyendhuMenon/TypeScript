// function infiniteLoop(): never {
//     while (true) {
//       console.log("Running forever...");
//     }
// }


// infiniteLoop()
  

let val: any;
val = "hello";
console.log(val.toUpperCase()); // No error.


let value: unknown;

value = "Hello";       // string
value = 42;            // number
value = true;          // boolean
value = { name: "Alice" }; // object

// Cannot call methods or access properties directly on `unknown`
// value.toUpperCase(); // Error: Object is of type 'unknown'

// Need to narrow the type first
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Works because `value` is now a string
}
