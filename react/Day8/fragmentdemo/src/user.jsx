import React from 'react';

export function User(props){
console.log(props)
 return(
  <>
    <h1 >Name: {props.name}</h1>
    <h2 >Name: {props.age}</h2>
    <h3 >Name: {props.location}</h3>
  </>
 )
}

export function UserArray(props){
console.log(props)
 return(
  <>
    <h2>My Name is {props.carinfo.name} {props.carinfo.location}!</h2>
    <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>

  </>
 )
}

export class UserArrayClass extends React.Component{

constructor(props){
    super(props);
}

render(){
  return (
    <>
       <h1>Props Array Class Example</h1>
       <h2>My Name is {this.props.carinfo.name} {this.props.carinfo.location}!</h2>
       <p>But it has to from {this.props.years[0]}, {this.props.years[1]}, or {this.props.years[2]}.</p></>
  );
 }
}

export function UserMap(props){
 return(
 <>
    <h2>My Name is {props.name} and age {props.age} and location is {props.location}</h2>
 </>
 )
}

export class UserMapClass extends React.Component{

constructor(props){
    super(props);
}

render(){
  return (
    <>
       <h2>My Name is {this.props.name} and age {this.props.age} and location is {this.props.location}</h2>
    </>
  );
 }
}
