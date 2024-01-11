'use client';
import { useEffect } from "react";
import BtnNavClose from "../BtnNavClose/BtnNavClose";
import Sociables from "../Sociables/Sociables";
import MenuNav from './../MenuNav/MenuNav';
import s from "./Nav.module.css";

export default function Nav({ open, handleClose }) {
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (open) {
      body.classList.add('lock');
      html.classList.add('lock');
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', addKeyDown);
    } else {
      body.classList.remove('lock');
      html.classList.remove('lock');
      document.body.style.overflow = '';
      window.removeEventListener('keydown', addKeyDown);
    }

    return () => {
      body.classList.remove('lock');
      html.classList.remove('lock');
      document.body.style.overflow = '';
      window.removeEventListener('keydown', addKeyDown);
    };
  }, [open]);

  const addKeyDown = (e) => {
    if (e.code === 'Escape') {
      handleClose();
    }
  };
  return (
    <div className={open ? `${s.overlay}` : `visually-hidden ${s.overlay}`}> 
      <aside
        className={
          open ? `${s.sectionSidebar}${s.active}` : `${s.sectionSidebar}`
        }
      >
        <div className={s.sidebarContainer}>
          <nav className="flex flex-col gap-y-[33px] desktop:gap-y-[23px]">
            <BtnNavClose handleClose={handleClose} />
            <MenuNav open={open} handleClose={handleClose} />
          </nav>
          <Sociables />
        </div>
      </aside>
    </div>
  );
}