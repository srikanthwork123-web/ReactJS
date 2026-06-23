import React from 'react'
import {useParams} from 'react-router-dom'

function About(){
      const {id}=useParams();
    return(
        <>
        <h1> This is About Component</h1>
        <p>Id Value: {id}</p> 
        </>
    );
}
export default About