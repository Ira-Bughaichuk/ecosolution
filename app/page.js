"use client";
import { useState } from "react";

import About from "@/sections/About/About";
import Cases from "@/sections/Cases/Cases";
import ContactUs from "@/sections/ContactUs/ContactUs";
import FAQ from "@/sections/FAQ/FAQ";
import Header from "@/sections/Header/Header";
import Main from "@/sections/Main/Main";
import Nav from "@/components/Nav/Nav";
import Hero from "@/sections/Hero/Hero";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClose =()=>{
    setOpen(false)
  }
  const handleOpen =()=>{
    setOpen(true)
  }
  return (
    <>
    <Nav open={open} handleClose={handleClose}/>
      <div className="wrapper-part">
        <Header handleOpen={handleOpen}/>
        <main className="main-part">
          <Hero />
          <Main />
          <About />
          <Cases />
          <FAQ />
          <ContactUs />
        </main>
        <footer className="footer-part">footer</footer>
      </div>
    </>
  );
}
