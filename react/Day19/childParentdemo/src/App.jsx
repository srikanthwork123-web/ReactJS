import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ChildParent from './ChildParent'

function App() {

const [message, setMessage] = useState("");
const [messageObj, setMessageObj] = useState({});


// Callback function
const getDataFromChild = (data,check) => {
    if(check){
      setMessage(data)
    }
    else
    { 
      setMessageObj(data);

    }
   

};


return (
    <div>

        <h1>
          Parent Component
        </h1>

        <h2>
          Child Data Variable: {message}
        </h2>

        <h2>
          Child Data Object: {Object.keys(messageObj).length ? JSON.stringify(messageObj) : 'No data'}
        </h2>


        <ChildParent sendData={getDataFromChild} />


    </div>
);

}
export default App
