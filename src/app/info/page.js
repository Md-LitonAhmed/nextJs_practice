"use client";
import React, { useEffect, useState } from "react";
import Service from '../components/Service'

const page = async () => {
  // const [data,setData]=useState(null)
  // useEffect(()=>{
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));

  // },[])

  // useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data)

  //       })
  //   }, [])

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return (
    <div>
      <h1>This is Info Page</h1>

      {
      data.map((element) => {
     
        return <Service key={element.id} {...element}></Service>
      })}
    </div>
  );
};
export default page;
