import React from 'react'

export function User(props) {
    return (
        <div>
            <h4>Name: {props.name}</h4>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
    );
}
export function UserArray(p){
    console.log(p)
    return(
    <>
    <h2>My Name is {p.carinfo.name} {p.carinfo.location}!</h2>
    <p>But it has to from {p.years[0]}, {p.years[1]}, or {p.years[2]}.</p>

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
       <h2>Props Array Class Example</h2>
       <h2>My Name is {this.props.carinfo.name} {this.props.carinfo.location}!</h2>
       <p>But it has to from {this.props.years[0]}, {this.props.years[1]}, or {this.props.years[2]}.</p></>
  );
 }
}

export class UserMapClass extends React.Component{

constructor(props){
    super(props);
}

render(){
  return (
    <>
       <h2>My Name is {this.props.name} and age is {this.props.age} and Location: {this.props.location}</h2>
    </>
  );
 }
}

export function UserDestructuring(props) {
    const {name, location} = props.userinfo;
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>Location: {location}</p>
        </div>
    );
}

export class UserDestructuringClass extends React.Component{

constructor(props){
    super(props);
} 
render(){
  const {name, location} = this.props.userinfo;
  return (
    <div>
      <h4>Name: {name}</h4>
      <p>Location: {location}</p>
    </div>
  );
 }
}   

export function UserDestructuringRest(props) {
    const {name, ...rest} = props.userinfo;
    return (
        <div>
            <h4>Name: {name}</h4>
            <h4>Age: {rest.age}</h4>
            <p>Location: {rest.location}</p>
        </div>
    );
}

export function UserDestructuringDefault(props) {
    const {name, age,location = "Delhi"} = props.userinfo;
    return (
        <div>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <p>Location: {location}</p>
        </div>
    );
}
