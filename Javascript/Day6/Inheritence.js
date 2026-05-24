class Animal {
//constructor() {console.log("Animal initialized.");}
  eat() {
    console.log("Eating");
  }

}

class Dog extends Animal {
//constructor() {console.log("Dog initialized.");}
  bark() {
    console.log("Barking");
  }

}

const d1 = new Dog();

d1.eat();
d1.bark();