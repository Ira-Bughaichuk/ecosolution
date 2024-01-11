'use client';
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { GoArrowUpRight } from "react-icons/go";
import { navMenu } from "@/utils/Data/navLinks";
import s from './MenuNav.module.css';

export default function MenuNav({open, handleClose}) {
    const [anchor, setAnchor] = useState('');

    useEffect(() => {
      const hash = window.location.hash;
      setAnchor(hash.substring(1, hash.length));
    }, []);
  
    const handleLinkClick = (label) => {
      setAnchor(label);
      handleClose();
    };
  
    useEffect(() => {
      const body = document.body;
      if (open) {
        body.classList.add('lock');
        document.body.style.overflow = 'hidden';
      } else {
        body.classList.remove('lock');
        document.body.style.overflow = '';
      }
  
      return () => {
        body.classList.remove('lock');
        document.body.style.overflow = '';
      };
    }, [open]);

  return (
    <ul className={s.navigation}>
    {navMenu.map(({label, href}, index) => (
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
  )
}
