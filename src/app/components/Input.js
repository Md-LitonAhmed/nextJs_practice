"use client";
import React, { useState } from "react";

export default function input() {
  const [bookName, setBookName] = useState("");
  const [bookTopic, setBookTopic] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Book Name: ", bookName);
    console.log("Book Topic: ", bookTopic);

    try {
      const response = await fetch("/api/book/new", {
        method: "POST",
        body: JSON.stringify({ name: bookName, topic: bookTopic }),
      });
      if (response.ok) {
        alert("Done properly");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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
          id="bookTopic"
          value={bookTopic}
          onChange={(e) => setBookTopic(e.target.value)}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
