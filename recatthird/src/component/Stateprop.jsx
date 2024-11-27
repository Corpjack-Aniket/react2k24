import React, { Component } from 'react'

export default class Stateprop extends Component {
    constructor()
    {
        super();
        this.state={
            name:"This is props destructring data in claass",
            age:20
        }
    }
  render() {
    const{name,age}=this.state
    return (
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
      </div>
    )
  }
}
