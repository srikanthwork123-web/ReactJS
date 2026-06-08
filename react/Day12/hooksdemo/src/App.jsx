import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OnewayTwowayBinding/>
      <TernaryOpertor/>
      <TenaryOperatorOnClick/>
      <HookUserEffect/>
    </>
  )
}

export function OnewayTwowayBinding() {
  const [name, setName] = useState('oneway');
  return (
    <div>
      <h2>name: {name}</h2>
      <button onClick={() => setName("koteswar")}>click</button>
      <br/>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export function TernaryOpertor(){
  const IsLoggedIn = true;
   return (
    <div>
      <h1>Ternary Operator</h1>
      {IsLoggedIn
        ? <h2>Welcome User</h2>
        : <h2>Please Login</h2>}
    </div>
  );
}

export function TenaryOperatorOnClick(){
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
     <h1>Ternary Operator with useState</h1>
      <h2>
        {isLoggedIn
          ? "Welcome User"
          : "Please Login"}
      </h2>

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        Toggle
      </button>

    </div>
  );
}

export function HookUserEffect(){
  
  useEffect(() => {
    console.log("Component Loaded");
  });

  
  return (
    <>
     <h1>useEffect example</h1>
    </>
  );
}
export default App
