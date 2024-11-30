//Write a program to find the simple interest.
//Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)



function simpleInterest (principalAmount : number , interestRate : number, years : number) : number{
    let Interest= (principalAmount * interestRate * years) /100
    return Interest
}

console.log (simpleInterest(10000,7,3))