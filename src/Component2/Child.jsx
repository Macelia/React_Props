import React from 'react'


const Child = (props) => {
  return (
    <div>
        <h2>I AM THE CHILD </h2>
        <p>Le Mesaage reçu de Mon parent : {props.message} {props.num} {props.message1}</p>

      
    </div>
  )
}

export default Child
