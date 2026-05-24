
 class Animal {

  sound() {
    console.log("Animal sound");
  }

}

class Dog extends Animal {

  sound() {
    console.log("Bark");
  }

}

const d = new Dog();

d.sound();
