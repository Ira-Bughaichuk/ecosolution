"use client";
import { useState } from "react";

import Cases from "@/sections/Cases/Cases";
import About from "@/sections/About/About";
import ContactUs from "@/sections/ContactUs/ContactUs";
import FAQ from "@/sections/FAQ/FAQ";
import Header from "@/sections/Header/Header";
import Nav from "@/components/Nav/Nav";
import Main from "@/sections/Main/Main";
import Electricity from "@/sections/Electricity/Electricity";
import Footer from "@/sections/Footer/Footer";

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
          <Main />
          <About />
          <Electricity />
          <Cases />
          <FAQ />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
}
