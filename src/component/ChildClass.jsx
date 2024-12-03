import React, { Component } from 'react'

export default class ChildClass extends Component {
    componentWillUnmount(){
        console.log("component will unmount");
        
    }
  render() {
    return (
      <div>
        <h1>Hi, React Brother</h1>
        
      </div>
    )
  }
}
