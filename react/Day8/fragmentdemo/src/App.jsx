import React, { useState,Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


class App extends React.Component {
  render() {
    return (<>
    <DivExample />
    <FragmentExample />
    <FragmentShortcutExample />
    <FragmentDeconstructExample />
    <ClassNameExample />
    <ButtonExample />
    <StyleExample />
    <ExpressionExample />
    <BootstrapExample />
    </>)  
  }
}

export class DivExample extends React.Component {
  render() {
    return (
      <div>    
        <h1 className="myclass">This is a heading with Div fragment</h1>
        <h2 className="myclass">This is a heading2</h2>
        <h3 className="myclass">This is a heading3</h3>
    </div>
  );
}
}


// we should use React.Fragment when we want to return multiple elements without adding an extra node to the DOM
export class FragmentExample extends React.Component {
  render() {
    return (
      <React.Fragment> 
      <h1 className="myclass">This is a heading with React fragment</h1>
      <h2 className="myclass">This is a heading2</h2>
    <h3 className="myclass">This is a heading3</h3>
    </React.Fragment>
  );
}
}
export class FragmentShortcutExample extends React.Component {
  render() {
    return (
      <> 
      <h1 className="myclass">This is a heading with Fragment Shortcut</h1>
      <h2 className="myclass">This is a heading2</h2>
      <h3 className="myclass">This is a heading3</h3>
    </>
  );
}
}
export class FragmentDeconstructExample extends React.Component {
  render() {
    return (
      <Fragment> 
      <h1 className="myclass">This is a heading with FragmentDeconstruct</h1>
      <h2 className="myclass">This is a heading2</h2>
      <h3 className="myclass">This is a heading3</h3>
    </Fragment>
  );
}
}
export class ClassNameExample extends React.Component {
  render() {
    return (
      <>
      <h1 className="myclass">This is a heading with a custom class</h1>
      <h2 className="myclass">Hello World</h2>
      </>
    );
  }
}   
export class ButtonExample extends React.Component {
  render() {
    const myfunc = () => {
      alert('Hello World');
    };
    return (
    <button onClick={myfunc}>Click me</button>
  );
}
}
export function StyleExample() {
  const mystyles = {
    color: "green",
    fontSize: "200px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My Style Example</h1>
    </>
  );
}

export function ExpressionExample() {
  return (
    <>
      {sum(4,5)}
      <h1>My Expression Example</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
}
function sum(n1,n2){
  return n1 + n2;
}

export function BootstrapExample() {
  const a = 4;
  const b = 5;
  return (
    <div className="container">
	<h1>Bootstrap example</h1>
  <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
  
  <label htmlFor="customRange2" className="form-label">Example range</label>
<input type="range" className="form-range" min="0" max="5" id="customRange2"/>
  </div>
  );
}

export default App
