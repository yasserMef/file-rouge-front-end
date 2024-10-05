'use client'


import "./globals.css";
import Navbar from "./utils/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./utils/Footer";



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
  
      >
    <Navbar/>
     {children}
    <Footer/>
     </body>
    </html>
  );
}
