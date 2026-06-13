import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home'
import ThemeContext from './ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PropDrillingExample/>
     <UseContextexample/>
    </>
  )
}

function PropDrillingExample() {
  let name = "Koteswar";
    let location = "Hyderabad";
let obj ={name:"koteswar",location:"Hyderabad"}
  return (
    <>
    <h1>This is Prop Drilling component</h1>
     <Home homeData={location} />
    </>
   
  );
}

function UseContextexample() {
  const theme = "dark";
  const location = "Hyderabad";

  return (
    <ThemeContext.Provider value={location}>
        <Home />
    </ThemeContext.Provider>
  );
}
export default App
