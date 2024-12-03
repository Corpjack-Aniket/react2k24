import React, { Component } from 'react'
import ChildComp from './ChildComp'


//! class component 
export default class ParentComp extends Component {

    //! creating method in Parent component 
     

    //! without parameter 
    // ParentMethod=()=>{
    //     alert("Hello this is Parent Method")
    // }


    //! with parameter 
    // ParentMethod=(childName, surname)=>{
    //     alert("Hello this is Parent Method"+childName + surname)
    // }

    //! using string template 
    ParentMethod=(childName, surname)=>{
        alert(`This is String template literal Name:${childName} last:${surname} `);
    }

  render() {
    return (
      <div>
        <h1>This is Parent Component</h1>
        <ChildComp callMethod={this.ParentMethod}/>
      </div>
    )
  }
}
