"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import { navMenu } from "@/utils/Data/navLinks";
import BtnNavClose from "../BtnNavClose/BtnNavClose";
import Sociables from "../Sociables/Sociables";
import ArrowMenu from "../../public/assets/icon/arrow-menu.svg";
import s from "./Nav.module.css";

export default function Nav({ open, handleClose }) {
  return (
    <aside
      className={
        open ? `${s.sectionSidebar}${s.active}` : `${s.sectionSidebar}`
      }
    >
      <div className={s.sidebarContainer}>
        <nav className="flex flex-col gap-y-[33px] desktop:gap-y-[23px]">
          <BtnNavClose handleClose={handleClose} />
          <ul className={s.navigation}>
            {navMenu.map((item) => (
              <li
                key={item.label}
                className=" group flex flex-row gap-x-2 items-center"
              >
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  className={`${s.navigation__link} group-hover:text-white`}
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
                <Image src={ArrowMenu} alt="arrow" className='stroke-lightGray group-hover:stroke-white w-[16px] h-[16px]'/>
              </li>
            ))}
          </ul>
        </nav>
        <Sociables />
      </div>
    </aside>
  );
}
