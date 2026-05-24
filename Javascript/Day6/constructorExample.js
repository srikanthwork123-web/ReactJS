class Calculator {
constructor() {console.log("Calculator initialized.");}
  add(a, b) {
    return a + b;
  }

}

const calc = new Calculator();

console.log(calc.add(2, 3));