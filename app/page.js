'use client';
import Header from './../sections/Header/Header';
import Main from './../sections/Main/Main';
import About from './../sections/About/About';
import Electricity from './../sections/Electricity/Electricity';
import Cases from './../sections/Cases/Cases';
import FAQ from './../sections/FAQ/FAQ';
import ContactUs from './../sections/ContactUs/ContactUs';
import Footer from './../sections/Footer/Footer';

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
