//Inheritence
class User {
    constructor(name, age) {
        this.name = name,
        this. age = age
    }
    
    hello(){
        console.log(`hello i'm ${this.name}`);
        
    }
}

const user1 = new User("shafin", 25);

class Admin extends User{
    constructor(name, age, role){
        super(name, age),
        this.role = role
        
    }
}

const user2 = new Admin("shahriar", 21, "ADMIN")


//encapsulation
class BankAccount{
    #balance = 0;

    constructor(owner){
        this.owner = owner;
    }

    depositeAmount(amount) {
        this.#balance += amount;
    }

    checkAmount(){
        return this.#balance;
    }

    removeAmount(amount){
        this.#balance -= amount;
    }

}

// const account1 = new BankAccount("Shafin");
// account1.depositeAmount(5000);
// account1.removeAmount(1500);
// account1.depositeAmount(2000);
// console.log(account1.owner);
// console.log(account1.checkAmount());


//abstraction
class Payment{
    #amount = 0;

    makePayment(){
        throw new error("make payment method must be implemented");
    }
}

class BkashPayment extends Payment{
    makePayment(){
        console.log("making payment using bkash");
    }
}

class CardPayment extends Payment{
    makePayment(){
        console.log("making payment using card");   
    }
}

// const payment1 = new BkashPayment();
// payment1.makePayment();

// const payment2 = new CardPayment();
// payment2.makePayment();

class Calculator{
    static add(a, b){
        return a + b;
    }
}
// console.log(Calculator.add(2, 3));

class Employee{
    #salary;

    constructor(name, salary){
        if(salary < 0){
            console.error("salary cannot be null");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return this.#salary;
    }

    set salary(value){
        if(value < 0){
            console.error("salary cannot be null");
        }
        else{
            this.#salary = value;
        }
    }
}

let employee1 =  new Employee("shafin", 10000);
console.log(employee1.salary);

employee1.salary = 40000;
console.log(employee1.salary);

