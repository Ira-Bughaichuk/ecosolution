'use client';
import dynamic from "next/dynamic";
const Cases = dynamic(() => import("../sections/Cases/Cases"))
const About = dynamic(() => import("../sections/About/About"))
const ContactUs = dynamic(() => import( "../sections/ContactUs/ContactUs"))
const FAQ = dynamic(() => import("../sections/FAQ/FAQ"))
const Header = dynamic(() => import("../sections/Header/Header"))
const Main = dynamic(() => import("../sections/Main/Main"))
const Electricity = dynamic(() => import("../sections/Electricity/Electricity"))
const Footer = dynamic(() => import("../sections/Footer/Footer"))

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
