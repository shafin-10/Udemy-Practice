// Parent constructor
function Animal() {}

// Add speak() to Animal's prototype
Animal.prototype.speak = function () {
    return "Animal speaking";
};

// Child constructor
function Dog() {}

// Add bark() to Dog's prototype
Dog.prototype.bark = function () {
    return "Woof!";
};

// Make Dog inherit from Animal
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Create Dog object
const dog = new Dog();

// console.log(dog.bark());  
// console.log(dog.speak()); 

// console.log(Object.getPrototypeOf(dog) === Dog.prototype); 
// console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); 
// console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype); 

//task 2
function Person(name, age) {
    if(age < 0){
        throw new Error("age should be positive");
    }
    this.name = name,
    this.age = age
}

Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}`;
}


//task 3
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  getDetails(){
      return `Make: ${this.make}, Model: ${this.model}`;
  }

   move(){
        return "The vehicle is moving";
    }

   static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}

class Car extends Vehicle{
    startEngine(){
        return "Engine started";
    }

    move(){
        return  "The car is driving";
    }
   
}
    

//task 4

class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }

  get balance(){
    return this._balance;
  }

  set balance(value){
    if(value < 0){
       throw new Error("Balance cannot be negative");
    }else{
        this._balance = value;
    }
  }

  deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
        } else {
            console.log("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
        } else {
           throw new Error("Insufficient funds");
        }
    }

}

class Shape {
    area(){
        return 0;
    }
}

class Circle extends Shape{
    #radius;
    constructor(radius){
        super();
        this.#radius = radius;
    }
    area(){
        return 3.1416*this.#radius*this.#radius;
    }
}

class Rectangle extends Shape{
    #length;
    #breadth;
    constructor(length, breadth){
        super();
        this.#length = length,
        this.#breadth = breadth
    }
    area(){
        return this.#length * this.#breadth;
    }
}




