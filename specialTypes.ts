

//any
let me : any = "navyendhu";
// me = 25
// me = true

console.log("any",me.toLocaleUpperCase())


//unknown
let input : unknown

input = "Hello"
input = 23

if( typeof input=== "string"){
    console.log(input.toLocaleUpperCase())
}
console.log("unknown", input)
// console.log("unknown", input.toLocaleUpperCase())