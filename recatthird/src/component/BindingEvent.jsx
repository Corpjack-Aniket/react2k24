import React, { Component } from 'react'

export default class BindingEvent extends Component {
   constructor(){
      super();
      //! 1st way of binding method
    //   this.Handlevent = this.Handlevent.bind(this); 
      this.state={
        name:"Adil"
      }
   }
   Handlevent(){
    this.setState({
        name:"Kumar"
    })
   }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        //! 2nd way of binding method
        
        <button onClick={this.Handlevent}>Click Me</button>
      </div>
    )
  }
}
