import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Should Component Update"
        }
        console.log(" Constructor called")
    }
    static getDerivedStateFromProps(props,state){
      console.log("GetDervicestate called");
      console.log(props);
      console.log(state);
        
    }

    shouldComponentUpdate(nextProps, nextState)
    {
      console.log("Should Component Update Called")
      console.log(nextProps);
      console.log(nextState);
      return true;
      // return false;
    
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
      console.log("getSnapShotBeforeUpdate called...");
      console.log(prevProps);
      console.log(prevState);
      return "Hello "

    }

    componentDidUpdate(prevProps,prevState,snapshot)
    {
      console.log("componentDidUpdate called");
      console.log(prevProps);
      console.log(prevState);
      console.log(snapshot);
    }

       
       changeState=()=>{
        this.setState({
            name:"Update Successfully"
        })
        console.log("Button Clicked");
       }

  render() {
    console.log("Render Called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.props.city}</h2>
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
