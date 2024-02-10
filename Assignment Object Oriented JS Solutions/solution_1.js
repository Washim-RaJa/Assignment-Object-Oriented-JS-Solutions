class BankAccount{
    #name;
    #balance;
    constructor(name,amount){
        this.#name = name;
        this.#balance = amount;
    }
    deposit(value){
        if (typeof value === 'number' && value > 0) {
            this.#balance += value;
            console.log(`Deposited Rs.${value}. New balance: Rs.${this.#balance}`); 
        } else {
            console.log("Invalid deposit amount. Please enter a positive amount.")
        }
    }
    withdraw(value){
        if (typeof value === 'number' && value > 0) {
            if (value < this.#balance) {
                this.#balance = this.#balance - value;
                console.log(`Withdrawn Rs.${value}. New balance: Rs.${this.#balance}`);
            } else {
                console.log("Insufficient funds for withdrawal.");
            }
        } else {
            console.log("Invalid withdrawal amount. Please enter a positive amount.");
        }
    }
    checkBalance(){
        console.log(`Account balance for ${this.#name}: Rs.${this.#balance}`);
    }
}

const myAccount = new BankAccount("Mithun S",1000);

myAccount.checkBalance();

myAccount.deposit(500);
myAccount.deposit(-50);

myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);

myAccount.checkBalance();
