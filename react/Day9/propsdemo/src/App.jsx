import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { User,UserArray,UserArrayClass,UserMapClass,UserDestructuring,UserDestructuringClass,UserDestructuringRest,UserDestructuringDefault } from './User'

function App() {

  return (
    <>
      <PropsExample/>
      <PropsArrayExample/>
      <PropsClassExample/>
      <PropsArrayClassExample/>
      <PropsMapExample/>
       <PropsMapClassExample/>
       <PropsDestructuringExample/>
       <PropsDestructuringRestExample/>
       <PropsDestructuringDefaultExample/>
    </>
  )
}

export function PropsExample() {
  return (
    <>
      <h3>Props Basic Example</h3>
      <User name="John" age={30} location="New York"/>
    </>
  );
}

export function PropsArrayExample() {
  let x = [1964, 1965, 1966];
  let y = {name: "koteswar", location: "Hyderabad"};
  return (
    <>
     <h3>Props Array Example</h3>
     <UserArray years={x} carinfo={y}/>
    </>
  );
}
export class PropsClassExample extends React.Component {
  render() {
    return (
      <>
        <h3>Props Class Example</h3>
        <User name="Alice" age={25} location="Los Angeles"/>
      </>
    );
  }
}
export function PropsArrayClassExample() {
  let x = [1964, 1965, 1966];
  let y = {name: "koteswar", location: "Hyderabad"};
  return (
    <>
     <h3>Props Array Class Example</h3>
     <UserArrayClass years={x} carinfo={y}/>
    </>
  );
}
export function PropsMapExample() {

  let userData = [
    {id: 1, name: "John", age: 30, location: "New York"},
    {id: 2, name: "Jane", age: 25, location: "Los Angeles"},
    {id: 3, name: "Bob", age: 35, location: "Chicago"}
  ];
  return (
    <>
     <h3>Props Map Function Example</h3>{
     userData.map((user) => {
        return <User key={user.id} id={user.id} name={user.name} age={user.age} location={user.location}/>
      })
     }
    </>
  );
}

// export function PropsMapClassExample() {
export function PropsMapClassExample() {

  let userData = [
    {id: 1, name: "John", age: 30, location: "New York"},
    {id: 2, name: "Jane", age: 25, location: "Los Angeles"},
    {id: 3, name: "Bob", age: 35, location: "Chicago"}
  ];
  return (
    <>
     <h3>Props Map Class Example</h3>{
     userData.map((user) => {
        return <UserMapClass key={user.id} id={user.id} name={user.name} age={user.age} location={user.location}/>
      })
     }
    </>
  );
}

// props destructirng function component example
export function PropsDestructuringExample() {
  let y = {name: "koteswar", age: 30, location: "Hyderabad"};
  return (
    <>
     <h3>Props Destructuring Function and Class Example</h3>
     <UserDestructuring userinfo={y}/>
     <UserDestructuringClass userinfo={y}/>
    </>
  );
}

// props destructirng function component restexample
export function PropsDestructuringRestExample() {
  let y = {name: "koteswar", age: 30, location: "Hyderabad"};
  return (
    <>
     <h3>Props Destructuring Rest Example</h3>
     <UserDestructuringRest userinfo={y}/>
    </>
  );
}

// props destructirng function component DEFAULT example
export function PropsDestructuringDefaultExample() {
  let y = {name: "koteswar", age: 30, location: "Hyderabad"};
  let z = {name: "koteswar", age: 30};
  return (
    <>
     <h3>Props Destructuring Default Example</h3>
     <UserDestructuringDefault userinfo={y}/>
     <UserDestructuringDefault userinfo={z}/>
    </>
  );
}
export default App
