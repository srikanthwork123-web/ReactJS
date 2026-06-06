import { useState,Component } from 'react'
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

class StateClassExmple extends Component{
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


export default App
