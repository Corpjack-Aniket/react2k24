import React, { Component } from 'react'

export default class Mounting1 extends Component {
  //! mounting 1st Method
  //! creating constructor and we also use shortcut rconst
  constructor(props) {
    super(props)

    this.state = {
      name: "Mounting1 Concept"

    }
    console.log("Mounting1 constructor is invoked");
  }

  //! mounting 2nd Method
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting1 getDerivedStateFromProps is accessed");
    console.log(props);
    console.log(state);
    return null
  }


  //! mounting 4th method
  componentDidMount(){
    console.log("Componnt did mount1 success");
  }

  //! mounting 3rd method
  render() {
    console.log("Mounting1 Render is invoked");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.props.city}</h2>

      </div>
    )
  }
}
