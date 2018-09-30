import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleDiv from './Task/task';
import GenNumbers from './Task2/task2';

// Render app comp in root and nest other comp. in app component
export default class App extends Component {

  constructor(props) {
    super(props);
     // This binding is necessary to make `this` work in the callback
    this.myClick = this.myClick.bind(this);
  }
  
  //alert when clicking on outer div
  myClick = () => {
    alert("Click only on inner div!");
  }

  render() {
    //this is JSX code, its compiled eventually into JS code, only one root element can be returned
    return (
        <div className="App">  
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React Task </h1>
          </header>
          <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          This is really awesome!
          </p>         
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
            <GenNumbers/>
        </div>
    );
  }
}