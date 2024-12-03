


//interaces


interface user {
    name : String,
    age : Number
}

let user1 : user = {name : "nav", age : 25}



//methods in interfaces

interface Hi {
    name : string,
    greet(): string
}


let user2 : Hi ={

    name : "Navyendhu",
    greet : () => `Hello ${user2.name}`
}

console.log(user2.greet())


//extends in interface


interface person1 {
    name : string,
    age : Number
}




// interface Employee extends person1 {

//     emp_id : Number,
//     dept : String
// }


// let employee : Employee = {
//     name : 'nav',
//     age : 25,
//     emp_id :1,
//     dept : "IT"
// }


// console.log(employee);



//function using interfaces 

interface Product {
    name: string;
    price: number;
    quantity: number;
  }


  function calculatePrice (products : Product[]): number{

    let total = 0

    products.forEach((product)=>{
        total += product.price * product.quantity
    });

    return total
}

const products: Product[] = [
    { name: 'Apple', price: 2, quantity: 5 },
    { name: 'Orange', price: 3, quantity: 3 },
    { name: 'Banana', price: 1, quantity: 10 },
  ];
  
  const totalPrice = calculatePrice(products);
  console.log(`Total Price: $${totalPrice}`);
  
  
