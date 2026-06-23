import React from 'react'
import {useParams} from 'react-router-dom'

function Contact(){
    const {id,name}=useParams();
    return(
        <>
        <h1> This is Contact Component</h1>
        <p>Id Value: {id}</p> 
         <p>Name Value: {name}</p> 
        </>
    );
}
export default Contact