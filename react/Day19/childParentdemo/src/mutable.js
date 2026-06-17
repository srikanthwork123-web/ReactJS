//Javascript mutable object
const obj ={personId:1, personName:"koteswar"};
obj.personId=2;
console.log(obj);

const arr= ['a','b'];
arr.push('c');
arr[0]='d';
console.log(arr);

//React immutable object
const recObj ={personId:1, personName:"koteswar"};
const recObjCopy ={...recObj, personId:2,address:"hyderabad"};
console.log('Immutable =',recObjCopy,recObj);
