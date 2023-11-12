"use client"
import React, { useState } from "react";

export default function input() {
  const [bookName, setBookName] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookName);
    console.log(bookTitle);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Book Name</label>
        <input
          type="text"
          id="bookName"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        ></input>
        <label>Book Title</label>
        <input
          type="text"
          id="bookTitle"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
