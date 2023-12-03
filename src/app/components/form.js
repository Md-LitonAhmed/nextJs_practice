import React, { useState } from 'react'

export default function form() {
    const [bookName, setBookName]=useState('')
    const [bookTitle, setBookTitle]=useState('')
    const handleFormSubmit= async(e)=>{
        e.preventDefault();
    
    console.log(`Book Name: `, bookName);
    console.log(`Book Title: `, bookTitle);


}


  return (
    <div>form</div>
  )
}
