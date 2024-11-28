

//alias type for object type 


type User = {name : String, age : Number ,isAdmin : Boolean }

let admin : User = {name : 'admin', age : 25, isAdmin: true}
let guest : User = {name : 'Navyendhu', age :25 , isAdmin: false}



//UNION TYPES 

type Shape = {kind : "circle", radius : number} |
             {kind : "rectangle", width :number, height : number}

let circle : Shape = {kind : "circle", radius :40}
let rectangle :Shape ={kind: "rectangle", width: 14, height:24}             


let findDetail = (shape : Shape) : number => {

    if (shape.kind === 'circle'){
        return Math.PI * shape.radius * shape.radius;
    }else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }

    return 0;
} 

console.log(findDetail(circle));      
console.log(findDetail(rectangle)); 


// INTERSECTION

type person = {name:  string}
type employee ={emp_id : Number}

type staff = person & employee ;


let detail : staff ={ name :"navyendhu", emp_id : 102}

console.log(detail)