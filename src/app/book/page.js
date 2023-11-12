import React from 'react'
import Image from 'next/image'

export default function page() {
 
  return (
    <div> 
      <h1>Book Page</h1>
      <Image
      src="/book.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
   
    </div>
  )
}
