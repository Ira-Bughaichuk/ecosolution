'use client'

import { Link } from "react-scroll";
import { navMenu } from "@/utils/Data/navLinks";
import BtnNavClose from "../BtnNavClose/BtnNavClose";
import Sociables from "../Sociables/Sociables";
import  s  from "./Nav.module.css";

import Image from "next/image";
import ArrowMenu from "../../public/assets/icons/arrow-right-menu.svg";
// import { usePathname } from "next/navigation";
// import './globals.scss';

 // const pathname = usePathname();
  // console.log(pathname)
  // const isActive = pathname.startsWith(item.href);
  // className={isActive ? text-secondary : text-gray}

export default function Nav({open, handleClose }) {
  return (
      <aside className={open ? `${s.sectionSidebar}${s.active}` : `${s.sectionSidebar}`}>
        <div className={s.sidebarContainer}>
          <nav className="flex flex-col gap-y-[33px] desktop:gap-y-[23px]">
          <BtnNavClose handleClose={handleClose} />
          <ul className={s.navigation}>
            {navMenu.map((item) => (
                <li key={item.label} className="font-firasans flex flex-row gap-x-2 items-center">
                    <Link to={item.href} 
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500} 
                      className={s.navigation__link}
                      onClick={handleClose}>
                    {item.label}
                  </Link>
                  <Image src={ArrowMenu} alt="arrow" width={16} height={16}/>
                </li>
            ))}
          </ul>
          </nav>
          <Sociables />
        </div>
      </aside>
    
  );
}
