import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseEffectBasicExample/>
      <UseEffectDependencyExample/>
      <UseEffectDependencyCountExample/>
      <Users/>
      <MultipleUseEffectsExample/>
    </>
  )
}
function UseEffectBasicExample(){
  
  const [count, setCount] = useState(0);

  useEffect(() => {
      console.log("Component Mounted");
  });

  return (
    <>
    <h1>useEffect with Basic example</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => {setCount(count + 1); console.log('Component Rendered')}}>
        Increment
      </button>
    </>
  );

}

function UseEffectDependencyExample(){
  
  const [count, setCount] = useState(0);

  useEffect(() => {
      console.log("Component Mounted");
  },[]);

  return (
    <>
     <h1>useEffect with Dependancies [] example</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => {setCount(count + 1); console.log('Component Rendered')}}>
        Increment
      </button>
    </>
  );

}

function UseEffectDependencyCountExample(){
  
  const [count, setCount] = useState(0);
 const [timer, setTimer] = useState(0);
  useEffect(() => {
      console.log("Component Mounted");
  },[count,timer]);

  return (
    <>
     <h1>useEffect with Dependancies [count] example</h1>
      <h2>Count: {count}</h2>
      <h2>Count: {timer}</h2>
      <button onClick={() => {setCount(count + 1); console.log('Count Component Rendered')}}>Count Increment</button>
      <button onClick={() => {setTimer(timer + 1); console.log('Timer Component Rendered')}}>Timer Increment</button>
    </>
  );

}

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));

  }, []);

  return (
    <>
      <h2>User List</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: {user.name} - Email:{user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

function MultipleUseEffectsExample(){
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  useEffect(() => {
    document.title = count;
  }, [isActive]);

  return (
    <>
    <h1>multiple useEffects with Dependancies [count] example</h1>
      <h2>{count}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}

export default App
