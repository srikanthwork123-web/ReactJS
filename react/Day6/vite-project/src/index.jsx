import React from 'react';
import ReactDOM from 'react-dom/client';

// // array of eletments display
let menus = ['Home','About','Contact','Service']

function Menu(){
    return(
        <ul className='menu'>
            <li>{menus[0]}</li>
            <li>{menus[1]}</li>
            <li>{menus[2]}</li>
            <li>{menus[3]}</li>
        </ul>
    )   
}
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Menu/>);


// array of eletments display
let name = "Home page";
export function Header(){// named export
 return (<header><ul><li>{name}</li><li>About</li><li>Contact US</li></ul></header>)
}
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);


export const PI=3.14; // named export

export default Menu; // default export
