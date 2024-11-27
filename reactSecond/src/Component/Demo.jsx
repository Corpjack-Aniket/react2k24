import React , {Component} from "react";

// class Demo extends React.Component
// {
//     render()
//     {
//         return(
//         <h1>Hello welcome to class component</h1>
//         )
//     }
// }


class Demo extends Component
{
    render()
    {
        return(
            <h1>Doing destructring in demo class</h1>
        )
    }
}


function App2()
{
    return(
        <h1>This is Functional Component</h1>
    )
}

const App3= ()=> <h1>This is arrow based component</h1>

export {App2,App3}; 

export default Demo;