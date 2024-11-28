import React, { Component } from 'react'
import Mounting1 from './mounting1';

export default class Mounting extends Component {
  //! mounting 1st Method
  //! creating constructor and we also use shortcut rconst
  constructor(props) {
    super(props)

    this.state = {
      name: "Mounting Concept"

    }
    console.log("Mounting constructor is invoked");
  }

  //! mounting 2nd Method
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting getDerivedStateFromProps is accessed");
    console.log(props);
    console.log(state);
    return null
  }
  


  //! mounting 4th method
  componentDidMount(){
    console.log("Componnt did mount success");
  }

  //! mounting 3rd method
  render() {
    console.log("Mounting Render is invoked");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.props.city}</h2>
        <Mounting1 city="Patna"/>

      </div>
    )
  }
}
