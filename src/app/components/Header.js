import Link from "next/link";
import React from "react";

export default function header() {
  return (
    <div className="mx-2 my-2 flex justify-center">
      <Link className="  mr-2 p-2 rounded-lg bg-yellow-300" href="/">
        Home
      </Link>
      <Link className="mr-2 p-2 rounded-lg bg-rose-400" href="/about">
        About
      </Link>
      <Link className="  mr-2 p-2 rounded-lg bg-green-500" href="/blog">Blog</Link>
      <Link className="  mr-2 p-2 rounded-lg bg-blue-600" href="/book">Book</Link>
      <Link className="  mr-2 p-2 rounded-lg bg-amber-400" href="/blog/content">Content</Link>
    </div>
  );
}
