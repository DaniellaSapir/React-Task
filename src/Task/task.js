import React from 'react';

export default class ToggleDiv extends React.Component {

    constructor() {
        super();
        //STATE is a class property used ONLY with Components not on Functions. Props are set and passed from outside the comp(attr into Task comp).State is managed from inside the comp and changes app state. DO NOT directly set state, unless in the Constructor
        this.state = {className: 'down'};
         // This binding is necessary to make `this` work in the callback
        this.changeState = this.changeState.bind(this);
    }

    //define class toggle method
    changeState(e) {
        // PREVENT outer div EVENT propagation 
        e.stopPropagation();
        
        //catch values of target el. on which the event is working (returns div current state)
        const state = e.target.className;
        // console.log(state);

        //TOGGLE STATE based on current state value
        if((state === 'down')||(state === 'flyDown')) {
            this.setState({className: 'flyUp'});
        }
        else {
            this.setState({className: 'flyDown'});
        }
    }

    render() {
        return (
            <div className={this.state.className} onClick={this.changeState}> Down </div>
        );
    }
  }
