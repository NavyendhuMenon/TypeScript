

//general object type 


let details :{name : string , age : number, isAdmin : boolean}

details = {name :"navyendhu", age :25, isAdmin: false}


//array

let numbers : number [] = [1,2,3,4]
let data : string [] = ["Navyendhu", "25"]


//tuples

let mydata :[string,number] =["nav", 25]
//it will be fixed size and fized order 


//union 

let union : string | number = "navyendhu";

let union1 : (string |number) [] = ["hellow", 24, "world"]

let union2 : {id :number|string , name : string}


//intersection

type user5 = {name : string}

type admin5 = {isAdmin: boolean}

let userDetail : user5&admin5 = {name :"navyendhu", isAdmin: false}


//literals

let direction : "left" | "right" = "right"


//enums

enum colors {
    red = "red",
    green ="green",
    blue ="blue"
}

let color : colors = colors.red



//type aliases

type name99 = string ;


let detaillll : name99 = "navyendhu"


//interfaces


interface Human {
    name : string,
    age : number,
    isAdmin : boolean
}


let mydetails : Human 


//Utility Types Overview
//Utility types are built-in TypeScript types that help manipulate existing types in a convenient way. Examples include Partial, Required, Readonly, Pick, Omit, etc.




+
//generics

function  demo <T> (value :T):T {
    return value
}


//promise


let promise1 = new Promise <string> ((resolve, reject)=>{

    let isAdmin = true
   

    if(isAdmin){
        resolve("success")
    }else{
        reject ("Failed")
    }

})

promise1.then((message)=>console.log(message)).catch((error)=> console.log(error))

