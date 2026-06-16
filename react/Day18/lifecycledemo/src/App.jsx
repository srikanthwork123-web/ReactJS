import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


class App extends Component {
  render() {
    return (
     <>
       <PropsExample favcol="green"/>
       <DidMountExmple favcol="green"/>
       <ShouldComponentExample/>
       <SnapshotBeforeUpdateExample/>
       <DidUpdateExample/>
       <WillUnmountExample/>
     </>
    )  
  }
}

class PropsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <div>
        <h1>This is Component with Props Example</h1>
        <h3>My Favorite Color is {this.state.favoritecolor}</h3>
      </div>
      
    );
  }
}

class DidMountExmple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    console.log("DidMount");
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 3000)
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>This is Component with DidMount Example</h1>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      </div>
      
    );
  }
}

class ShouldComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
    console.log(this.state.favoritecolor);
  }
  render() {
    return (
      <div>
      <h1>This is Component with ShouldComponent Example</h1>
      <h3>My Favorite Color is {this.state.favoritecolor}</h3>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class SnapshotBeforeUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 5000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
  return  document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>This is Component with SnapshotBeforeUpdate Example</h1>
        <h3>My Favorite Color is {this.state.favoritecolor}</h3>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

class DidUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 5000)
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>This is Component with DidUpdate Example</h1>
      <h3>My Favorite Color is {this.state.favoritecolor}</h3>
      <div id="mydiv"></div>
      </div>
    );
  }
}

class WillUnmountExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <RemoveChild />;
    };
    return (
      <div>
        <h1>This is Parent Component with WillUnmount Example</h1>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class RemoveChild extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default App
