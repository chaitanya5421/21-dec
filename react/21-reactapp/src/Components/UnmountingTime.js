import React, { Component } from 'react'

class UnmountingTime extends Component {
    constructor(props){
        super(props)

        this.state = {
            time: 0
        }
        this.timerId = null
    }

    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState((prevState) => ({
                time: prevState.time + 1
            }))
            console.log(this.state.time)
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

  render() {
    return (
      <div>
        <h2>UnmountingTime</h2>
        <h3>Time: {this.state.time}</h3>
      </div>
    )
  }
}

export default UnmountingTime