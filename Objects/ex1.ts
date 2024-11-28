//inline object types
//Define the shape of an object directly in a variable declaration


let user : {name : String, age :Number, isAdmin : boolean}

user = { name : "Navyendhu",age :25, isAdmin: true}

user= {age : 25, name: "Nav", isAdmin: true} //dont apply any specific order

console.log(user)


//optional property 

let product : {name:String , age : Number , description ? : String}

product = {name : 'NAVYENDHU', age :25}

console.log(product)