// import React from 'react'

//! Event handling in class component
// import React, { Component } from 'react'

// export default class Event extends Component {

//   HelloFunction()
//   {
//     alert("this is class function")
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.HelloFunction}>Click Me</button>
//       </div>
//     )
//   }
// }





//! event handling in fumctional component
// function Event() {
//     const Hellofunction = (name)=>{
//         alert("Hello" + name);
//     }
//   return (
//     <div>
//       <button onClick={()=>Hellofunction("Aniket")}>Click me</button>
//     </div>
//   )
// }

// export default Event


//! argument passing through props in event handling in functional component
// function Event(props) {
//   const Hellofunction = (name)=>{
//       alert("Hello" + name);
//   }
// return (
//   <div>
//     <button onClick={()=>Hellofunction(props.name)}>Click me</button>
//   </div>
// )
// }

// export default Event


//! argument passing through props in event handling in class  component

import React, { Component } from 'react'

export default class Event extends Component {
  HelloFunction()
  {
    alert("Hello")
  }
  render() {
    const Hello =(name)=>{
      alert("Hello"+name);
    }
    return (
      <div>
        <button onClick={()=>Hello(this.props.name)}>CLICK me</button>
      </div>
    )
  }
}
