import React from 'react';

export default class ToggleDiv extends React.Component {

    constructor(props) {
        super(props);
        //DO NOT directly set state, unless in the Constructor
        this.state = {className: 'down'};
         // This binding is necessary to make `this` work in the callback
        this.changeState = this.changeState.bind(this);
    }

    //one way - use timeout to return the div className back to down
    changeState(e) {
        // ADD EVENT LISTENER TO PREVENT DEFAULT
        e.stopPropagation();
        // e.preventDefault();
        //we can catch values of target el. on which the event is working (returns down)
        const state = e.target.className;
        console.log(state);
        
        if((state === 'down')||(state === 'flyDown')) {
            this.setState({className: 'flyUp'});
        }
        else {
            this.setState({className: 'flyDown'});
        }

        // setTimeout(() => {
        //     this.setState({className: 'down'});
        // }, 1000);
    }

    render() {
        return (
            <div className={this.state.className} onClick={this.changeState}> Down
                {/* {props.children} */}
            </div>
        );
    }
  }
//a component is basically a func. returning JSX -- BEST PRACTICE TO USE! don't alter the state
// const taskDiv = (props) => {
    //create outer div
    // return (
        //catch a reference to handler
        // <div className="inner" onClick={props.onClick}>
    // {/* Generate dynamic data */}
            // {/* <p>I am about {Math.floor(Math.random() * 30)} years old! :)</p> */}
    // {/*pass data using obj props(properties which are comp.attributes).To use pass it as arg. in definition*/}
            // {/* <p>I am {props.name} about {props.age} years old! :)</p> */}
    // {/* we can use props.children in order to add any child element */}
            // {props.children}
        // </div>
    // );
// }


