"use client";
import { useState } from "react";
import BtnHeader from "@/components/BtnHeader/BtnHeader";
import BtnNavOpen from "@/components/BtnNavOpen/BtnNavOpen";
import Logo from "@/components/Logo/Logo";
import s from "./Header.module.scss";
import Nav from "@/components/Nav/Nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <header className={s.header}>
      <div className="container-main">
        <Nav open={open} handleClose={handleClose} />
        <div className={s.block}>
          <Logo />
          <div className={s.block__right}>
            <BtnNavOpen handleOpen={handleOpen} />
            <div className={s.block__right__btn}>
              <BtnHeader title={"Get in touch"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
