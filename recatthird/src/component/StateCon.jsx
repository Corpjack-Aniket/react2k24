import React, { Component } from 'react'

export default class StateCon extends Component {
    constructor()
    {
        super();
        this.state = {
            name:"Welecome to state react component"
        }
    }

    changeState()
    {
        this.setState({
            name:"State changed"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.changeState()}>Click Me</button>
      </div>
    )
  }
}
