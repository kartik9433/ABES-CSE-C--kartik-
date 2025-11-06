import React from 'react'
import "./Book.css"
import { useState } from 'react'

function Book(props) {
    const [count,setCount] = useState(0);
  return (
    <div id='book'>
        <img src={props.src} alt="" />
         <h2 >Title:{props.title}</h2>
          <h1>Price:${props.price}</h1>
          <div className="btn">
              <button onClick={()=>setCount(count+1)}>+</button>
              <span>{count}</span>
              <button onClick={()=>setCount(count-1)}>-</button>
          </div>
    </div>
  )
}

export default Book
