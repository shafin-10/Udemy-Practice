function Animal(species){
  this.species = species;
  this.eat = function(){
     console.log(`${this.species} eating food`); 
  }
}

Animal.prototype.sound = function(){
  console.log(`${this.species} making sound`); 
}

const dog = new Animal("Dog");
dog.sound();
dog.eat();