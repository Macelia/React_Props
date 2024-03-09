import React from 'react'
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {

    const data =" Hello from Parent Component "
  return (
    <div>
        <h2>Parent Coponent</h2>
       <ChildComponent data={data}/>
      
    </div>
  )
}

export default ParentComponent
