class Animal {
  constructor(name) {console.log("Animal initialized."); this.name=name;}

}

class Dog extends Animal {

  constructor(name, breed) {
    
    super(name);
    this.name = name;
    this.breed = breed;
  }

}

const d1 = new Dog("Tommy", "Labrador");

console.log(d1.name);
console.log(d1.breed);