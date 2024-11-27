import Demo from "./component/Demo"
import Property from "./component/property"
import State2 from "./component/State2"
import StateCon from "./component/StateCon"
import Student from "./component/Student"
import TypeCheck from "./component/TypeCheck"
import State3 from "./component/State3"
import Stateprop from "./component/Stateprop"
import Event from "./component/Event"
import BindingEvent from "./component/BindingEvent"

function App() {


  return (
    <>
     {/* <h1>this is Class Component</h1>
     <Demo/>
     <Property name="React Class"/>
     <TypeCheck name="Aniket" age={23} city="lucknow"/>
     <Student name="This is Constructor "/> */}
     {/* <StateCon/>
     <State2/>
     <State3 name="Props with state"/>
     <Stateprop/> */}
     {/* <Event name="Aniket"/> */}
     <BindingEvent/>
    </>
  )
}

export default App
