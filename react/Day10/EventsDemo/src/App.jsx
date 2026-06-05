import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Events in React</h1>
    <h4>Basic Event Handling</h4>
      <EventBasic />
      <br />
       <br />
        <br />
      <h4>Event Handling with Parameters</h4>
      <EventWithParams />
        <br />
      <h4>Event Handling with Event Object</h4>
      <EventWithEventObj/>
       <br />
      <h4>Event Handling with Message</h4>
      <EventWithMessage/>
      
    </>
  )
}

function EventBasic(){
 const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Click Me!</button>
  );
}

function EventWithParams(){
 const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("koteswar")}>Click Me</button>
  );
}

function EventWithEventObj(){
 const shoot = (custommesg, evntobj) => {
    alert(evntobj._reactName + " says: " + custommesg);
    /*
    'evntobj' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <button onClick={(event) => shoot("Koteswar", event)}>Click Me</button>
  );
}

function EventWithMessage(){
 function displaymessage(message, event) {
     alert("button clicked: " + message);
      console.log(event);
  }

  return (
    <button onClick={(e) => displaymessage("Test", e)}>Click!</button>
  );
}

export default App
