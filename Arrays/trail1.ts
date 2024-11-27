

//explicit type

let name1 : String [] = ["Navyendhu", "shdhd", "dfedge"]

let number1 : Number [] = [1,2,3]



//Generic type

let name2 : Array<String> = ["Navyendhu", "shdhd", "dfedge"]

let number2 : Array <Number> = [1,2,3]


//read only type

let number3 : readonly Number[] = [1,2,3]

// number3.push(4) // Error: Cannot modify a readonly array

console.log(number3) //[ 1, 2, 3 ]


//multidimentional array

let metrix : number [] [] = [[1,2,3], [1,2,3]]

console.log(metrix)


//UNION type

let mixed :( String | Number ) [] 

mixed = ["navyendhu", 2, "hekms"]
// mixed = ["hdcbhcbd",33, true]   // Error : boolean is not set


//tuple

let tuple : [Number, String, boolean]

tuple = [25, "Nav", true]
// tuple =["hdhd",23, true] //shows error as it is not in order 

tuple.push(25)
tuple.push(true)
// it is possible to add new element that is not in the order but it is not adviceble or can be consider as disadvantage
//instead of it we can use read only let tuple : readonly [Number, String, boolean]
console.log(tuple)