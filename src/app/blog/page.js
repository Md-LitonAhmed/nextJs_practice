"use client"
import React, { useState } from 'react';

export default function page() {
  const [count, setCount]=useState(0);

  const handleIncrement=()=>{
    setCount(count +1);
  }

  const handleDecrement=()=>{
    setCount(count -1);
  }
  
  
  return (
 <div className='grid justify-items-center '>
     <div className='h-[200px] w-[300px] bg-gray-400 grid justify-items-center rounded-lg'>
      <h1> This is Blog page</h1>
      <p>Counter:{count}</p>
      <button  className='bg-green-600 mb-2  p-2 rounded-lg' onClick={handleIncrement}>Increment</button>
      <button  className='bg-rose-400 mb-2  p-2 rounded-lg' onClick={handleDecrement}>Decrement</button>

    </div>
 </div>
  )
}
