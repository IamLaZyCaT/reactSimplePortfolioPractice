import React, { useState } from 'react';

const test = () => {
 
 const [count,setCount]=useState(0);
 const incCount=()=>{
  setCount(count+1)
  console.log(count)
 }
 const decCount=()=>{
  setCount(count-1)
  console.log(count)
 }
  return (
   <>

   <h1>{count}</h1>
   <button onClick={incCount}>+</button>
   <button onClick={decCount}>-</button>
   </>
  )
}

export default test