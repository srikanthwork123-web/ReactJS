class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name +' '+this.age}`);
  }

}
const p1 = new Person("John", 25);

p1.greet();