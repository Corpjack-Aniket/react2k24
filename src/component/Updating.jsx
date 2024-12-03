import React, { Component } from 'react'
import Updating1 from './Updating1';

export default class Updating extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"This is Updating Class Component"
        }
    }

  changeState= ()=>{
    console.log("Button Clicked");
    this.setState({
        name:"Chnages dones"
    })
    
  }
  render() {
    
    return (
      <div>
     <Updating1 name={this.state.name}/>

     <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
