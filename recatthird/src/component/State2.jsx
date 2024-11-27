import React, { Component } from 'react'

export default class State2 extends Component {
  constructor()
  {
      super();
      this.state={
        name:"Value of state is 1"
      }
  }


  changeName(){
    this.setState({
        name:"State Change from 1 to 2"
    })
  }
  render() {
    return (
      <div>
        <hr />
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.changeName()}>Click me </button>
      </div>
    )
  }
}
