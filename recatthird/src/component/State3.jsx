import React, { Component } from 'react'

export default class State3 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:this.props.name
        }
    }

    changeState(){
        this.setState({
            name:"Ram"
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
