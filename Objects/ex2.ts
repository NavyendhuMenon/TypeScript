

//alias type for object type 


type User = {name : String, age : Number ,isAdmin : Boolean }

let admin : User = {name : 'admin', age : 25, isAdmin: true}
let guest : User = {name : 'Navyendhu', age :25 , isAdmin: false}



//UNION TYPES 

type Shape = {kind : "circle", radius : number} |
             {kind : "rectangle", width :number, height : number}

let circle : Shape = {kind : "circle", radius :40}
let rectangle :Shape ={kind: "rectangle", width: 14, height:24}             
