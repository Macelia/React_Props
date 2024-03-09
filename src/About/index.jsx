import React from 'react'
import './About.css'

import about from "./1.jpeg";


const index = (props) => {
 
  const name =props.name;
   const age=props.age;
   const message=props.message;



  return (
    <div className='About'>
      <h1>About Us</h1>
            <img src={about} alt='' style={{width:"300px",height:"200px"}}/>
            
            <p>Bienvenus {name} chez nous,toi qui a {age} ans</p><br></br>
            <p>{name} {message}</p>
      

    </div>
  )
}

export default index
