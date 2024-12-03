import React, { Component } from 'react'

export default class Updating1 extends Component {
    constructor(props){
        super(props);
        this.state={
            name1:this.props.name
        }
    }

    static getDerivedStateFromProps(props,state){
         console.log("getDerivedStateFromProps called....");
         if(props.name !== state.name1){
            return{name1:props.name}
         }
         return null
    }
  render() {
    return (
      <div>
        <h1>{this.state.name1}</h1>
      </div>
    )
  }
}
 