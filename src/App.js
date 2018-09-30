import React, { Component } from 'react';
import './App.css';
import ToggleDiv from './Task/task';
import Rand48 from './Task2/task2';

// JSX - html code which compiled to js
//render app comp here in root and nest other comp. in this app root component
export default class App extends Component {

  constructor(props) {
    super(props);
     // This binding is necessary to make `this` work in the callback
    this.myClick = this.myClick.bind(this);
  }

  myClick = () => {
    
    alert("Click only on inner div!");
  }
  
  // STATE is a class property used ONLY with Components not on Functions. Props are set and passed from outside the comp(like name&age into Task comp).State is managed from inside the comp.and only for React Components
  render() {
    //this is JSX code, its compiled eventually into JS code, only one root element can be returned
    return (
        <div className="App">  
            {/* PROPS used to pass this components attributes(obj),to display any data btwn opening closing tags, use props.children */}
            <div className='outer-div' onClick={this.myClick}>  
                <div className='inner'/>
                <div className='inner'/>
                <div className='inner'/>
                <div className='inner'/>
                <div className='inner'/>
                <div className='inner'/>
                <ToggleDiv> Down </ToggleDiv>
                {/* pass a reference to handler to the property of our comp. name can be anything (click, onclick, moshe) 
                WE CAN'T PASS METHODS WHICH CHANGING STATE TO ANOTHER COMPONENT(which don't have direct access to it)  OTHER THAN PARENT*/}  
            </div>
            <Rand48/>
        </div>
    );
  }

    // option 2 - for each el. need to use createElement. 3 args, el, config. object, and children
    // return React.createElement('div', null, 'h1', 'Hi this is Daniella');  //h1 not rendered
    // return React.createElement('div', null, React.createElement('h1', null ,'Hi this is Daniella'));  //h1 rendered 
    
  
}


// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to my React Task </h1>
// </header>
// <p className="App-intro">
// {/* To get started, edit <code>src/App.js</code> and save to reload. */}
// This is really awesome!
// </p> 