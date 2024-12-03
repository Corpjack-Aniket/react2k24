// import React, { Component } from 'react'


//! class component
// export default class ChildComp extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={()=>this.props.callMethod("Aniket")}>Click Me</button>
//       </div>
//     )
//   }
// }




//! functional component

import React from 'react'

export default function ChildComp(props) {
  return (
    <div>
        <button onClick={()=>props.callMethod("Aniket","Singh")}>Click Me</button>
    </div>
  )
}

