import React from 'react'

 const Service = (element) => {
    const {id,name,email}=element;
  return (
    <div>
        <h1>I am from Service page</h1>
        <h1>ID:{id}</h1>
        <h1>Name:{name}</h1>
        <h1>Email:{email}</h1>

    </div>
  )
}
export default Service;