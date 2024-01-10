"use client";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navMenu } from "@/utils/Data/navLinks";
import BtnNavClose from "../BtnNavClose/BtnNavClose";
import Sociables from "../Sociables/Sociables";
import { GoArrowUpRight } from "react-icons/go";

import s from "./Nav.module.css";

export default function Nav({ open, handleClose }) {
  const [anchor, setAnchor] = useState("");
useEffect(() => {
  const body = document.body;
  if (open) {
    body.classList.add("lock");
  } else {
    body.classList.remove("lock");
  }
  return () => {
    body.classList.remove("lock");
  };
}, [open]);

useEffect(() => {
  const hash = window.location.hash;
  setAnchor(hash.substring(1, hash.length));
}, []);

const handleLinkClick = (label) => {
  setAnchor(label);
  handleClose();
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
          <ul className={s.navigation}>
            {navMenu.map(({label,href }, index) => (
              <li
                key={label}
                className={`group flex flex-row gap-x-2 items-center`}
              >
                <Link
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  className={`${s.navigation__link} group 
                  ${
                    (index === 0 && !anchor) || anchor === label ? s.active : ''
                  }`}
                  onClick={() =>  handleLinkClick(label)}
                >
                  {label}
                    <GoArrowUpRight size={16} className='group-hover:text-white cursor-pointer ease-in duration-500 '/>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sociables />
      </div>
    </aside>
    </div>
  );
}
