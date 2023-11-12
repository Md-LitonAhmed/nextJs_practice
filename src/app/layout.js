import "./globals.css";
import Header from "./components/Header.js";
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <h1>Footer</h1>
      </body>
    </html> 
  );
}
