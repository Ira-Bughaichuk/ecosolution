'use client';

import Cases from "@/sections/Cases/Cases";
import About from "@/sections/About/About";
import ContactUs from "@/sections/ContactUs/ContactUs";
import FAQ from "@/sections/FAQ/FAQ";
import Header from "@/sections/Header/Header";
import Main from "@/sections/Main/Main";
import Electricity from "@/sections/Electricity/Electricity";
import Footer from "@/sections/Footer/Footer";

export default function Home() {
  return (
      <div className="wrapper-part">
        <Header />
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
  );
}
