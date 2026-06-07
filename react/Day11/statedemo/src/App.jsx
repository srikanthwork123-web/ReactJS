import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  return (
    <>
      <BasicCounter />
      <StateCounter />
      <StateClassExmple />
      <StateClassInputExample />
      <StateFunctionObject/>
      
    </>
  )
}

function BasicCounter() {
  let count=0;
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={updateCount}>Increment</button>
    </div>
  )
  function updateCount(){
  count++;
  console.log(count);
}
}

function StateCounter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

class StateClassExmple extends React.Component{
state={counter:0,name:"John Doe",age:30}
render(){
  return (
   <>
   <h1>Counter Value :{this.state.counter}</h1>
   <h1>Name :{this.state.name}</h1>
   <h1>Age :{this.state.age}</h1>
    <button onClick={()=>{
           this.setState({counter: this.state.counter+1,name:"koteswar",age:25});
         }}>Change</button>
   </>
  )
 }
}

class StateClassInputExample extends React.Component{
  state={product:"Samsung S26",price:25000}
  constructor(){
    super();
    this.handlePriceChange=this.handlePriceChange.bind(this);
  }
  render(){
    return (
     <>
      <p>Product :{this.state.product}</p>
      <p>Price :{this.state.price}</p>
      <input id='price' type="number" placeholder='Enter Price'/>
      <button onClick={this.handlePriceChange}>Change</button>
     </>
    )
   }
   handlePriceChange(){
        let newPrice = document.getElementById("price").value;
        console.log(newPrice);
        this.setState({price: newPrice},()=>{console.log(this.state)});
     }
 }
function StateFunctionObject(){
  const [product,updateProduct]=useState({"pname": "Samsung S26 mobile", "price": 20000});
const updatePrice=()=>{
      let pname1=document.getElementById('productname').value;  
      let price1=document.getElementById('priceval').value;
     console.log(pname1);
     console.log(price1);
     updateProduct({...product, pname: pname1,price: price1});
  }
return (
   <>
       <h1>Product Name :{product.pname}</h1>
       <p>Price Value :{product.price}</p>
       <p>Product Value :{JSON.stringify(product)}</p>
       <input id="productname" type="text"/>
       <input id="priceval" type="text"/>
       <button onClick={updatePrice}>Update</button>      
   </>
  )
}

export default App
