import React from 'react'

const demo = () => {
  return (
    <div>
      <h1>This is Default export</h1>
    </div>
  )
}

const demo2 = ()=>{
    return(
        <>
        <h2>This is named export</h2>
        </>
    );
}
export {demo2};
export default demo;
