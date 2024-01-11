"use client";
import { useState, useEffect } from "react";
import BtnHeader from "@/components/BtnHeader/BtnHeader";
import BtnNavOpen from "@/components/BtnNavOpen/BtnNavOpen";
import Logo from "@/components/Logo/Logo";
import s from "./Header.module.scss";
import Nav from "@/components/Nav/Nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 36);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  // const handleToggleNav =()=>{
  //   setOpen(!open);
  // }
  return (
    <header className={s.header} style={{ backgroundColor: isScrolled ? "#ffffff" : "#F3F5FA" }}>
      <div className="container-main">
        <div className={s.block}>
          <Logo />
          <div className={s.block__right}>
            <BtnNavOpen handleOpen={handleOpen} />
            <div className={s.block__right__btn}>
              <BtnHeader title={"Get in touch"} />
            </div>
          </div>
        </div>
        <Nav open={open} handleClose={handleClose} />
      </div>
    </header>
  );
}
