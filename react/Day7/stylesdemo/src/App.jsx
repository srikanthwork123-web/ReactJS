import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <ClassNameExample />
      <DivExample />
      <FragmentExample />
      <FragmentShortcutExample />
      <ButtonExample />
    </>
  )
}
export function DivExample() {
  return (
    <div>    
      <h1 className="myclass">This is a heading with a custom class</h1>
    <h2 className="myclass">This is a heading2</h2>
    <h3 className="myclass">This is a heading3</h3>
    </div>
  );
}

// we should use React.Fragment when we want to return multiple elements without adding an extra node to the DOM
export function FragmentExample() {
  return (
    <React.Fragment> 
    <h1 className="myclass">This is a heading with a custom class</h1>
    <h2 className="myclass">This is a heading2</h2>
    <h3 className="myclass">This is a heading3</h3>
    </React.Fragment>
  );
}

export function FragmentShortcutExample() {
  return (
    <> 
    <h1 className="myclass">This is a heading with a custom class</h1>
    <h2 className="myclass">This is a heading2</h2>
    <h3 className="myclass">This is a heading3</h3>
    </>
  );
}

export function ClassNameExample() {
  return (
    <>
    <h1 className="myclass">This is a heading with a custom class</h1>
    <h2 className="myclass">Hello World</h2>
    </>
  );
}
export function ButtonExample() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}
export function StyleExample() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My Style Example</h1>
    </>
  );
}


export default App

