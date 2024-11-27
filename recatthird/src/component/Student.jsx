import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props)
    {
        super(props);
        console.log("constructor from student");
        
    }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}
