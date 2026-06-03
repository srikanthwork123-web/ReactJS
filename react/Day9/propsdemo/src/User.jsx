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