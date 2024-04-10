import React, { Component } from 'react'

class Counter extends Component {
    // state is an object, which is used to manipulate data within the component.

    // never update the state directly

    constructor(){
        super()
        // this.state = {
        //     counter:0
        // }
    }

    state = {
        counter: 0
    }

    // state = {
    //     name:"aswathi",
    //     email:"aswathi@gmail.com",
    //     phone:9098776884
    // }

    handleIncrement = () => {
        this.setState({counter: this.state.counter + 1})
    }

    handleDecrement = () => {
        this.setState({counter: this.state.counter - 1})
    }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <h4>Count: {this.state.counter}</h4>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button>Reset</button>
        <button>change email</button>
      </div>
    )
  }
}

export default Counter