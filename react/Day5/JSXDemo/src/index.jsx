import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ul><li>Home</li><li>About</li><li>Contact</li></ul>)

function Menu(){
    return(
        <ul className='menu'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
             <li>Services</li>
        </ul>
    )   
}
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menu/>);