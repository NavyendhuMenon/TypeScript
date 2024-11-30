


class bankAccount {

    private balance : number ;


    constructor(initialBalance : number){

        this.balance = initialBalance ;
    }


    public getBalance () : number {
        return this.balance
    }

    public deposit (amount :number) : void {

        if (amount> 0){
            this.balance += amount
            console.log(`Successfully deposited ${amount}, your current balance is ${this.balance}`)

        }else{

            console.log("Please deposit value above 0")
        }
    }


    public withdraw (amount :number) : void {
        if (amount <= 0){
            console.log(`withdraw amount above 0`);
            
        }else if (amount > this.balance){

            console.log(`Insufficient balance !!! , Your cuurent balance is ${this.balance}`)

        }else {
            this.balance -= amount
            console.log(`Successfully withdrawed ${amount}, Current balance is ${this.balance} `)
            
        }
    }

    
}


let myAccount = new bankAccount(5000)

console.log(myAccount.getBalance());
myAccount.deposit(1000)
myAccount.withdraw(7000)
myAccount.withdraw(2000)