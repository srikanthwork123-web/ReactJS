console.log('For loop');
for(let i1=0;i1<3;i1++){
    console.log(i1);
}

console.log('Named function');

let arr_add=[50,100];
//Named function
function add(a,b){
    return a+b;
}
console.log(add(...arr_add));

console.log('anonymous function');
//anonymous function 
let add1 = function(a,b) {
    return a*b;
}
console.log(add1(...arr_add));

console.log('arrow function');
//arrow function 
let add2 = (a,b) => b/a;
console.log(add2(...arr_add));


//arguments - inbuild object that contains array of args passed
function callFn(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
}
callFn(3,5);

let callFn1=(...arr)=>{console.log(arr[0]);console.log(arr[1]);console.log(arr[2]);}
callFn1('abc','def','efg');

  console.log('reduce');
//reduce()
let num1=[1,2,3,6,7];
let result = num1.reduce((total,n)=>total+n,0);
  console.log(result);
//total - accumulate variable is nothing but result
//n     - current value
//0     - initial value

 console.log('map');
//map()
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//Transforming data
//Formatting objects

console.log('filters');
const users = [
  { name: "John", age: 20 },
  { name: "Sam", age: 15 },
  { name: "David", age: 25 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);