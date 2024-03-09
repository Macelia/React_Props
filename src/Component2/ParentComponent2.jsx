import React from 'react'
import Child from './Child'

const ParentComponent2 = () => {
    const num=4
    const message="JE SUIS VOTRE" 
    const message1= " EME ARRIERE PARENT"
  return (
    <div>
      <h2>AM THE PARENT</h2>
      <Child  message={message}  num={num}  message1={message1}/>
    </div>
  )
}

export default ParentComponent2
