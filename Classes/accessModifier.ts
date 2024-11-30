

//access modifier 


class Employee {
          

   public name : string ;
   private age : number;

   constructor(name : string, age : number){

     this.name = name
     this.age = age
   }

   getAge(): number{
    return this.age
   }
}


let newEmployee = new Employee("Navyendhu", 25)
console.log(newEmployee.name)
// console.log(newEmployee.age) //error : age is defined as private 
console.log(newEmployee.getAge())