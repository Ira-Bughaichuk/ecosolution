import Image from "next/image";
import Facebook from '../../public/assets/icons/facebook.svg';
import Instagram from '../../public/assets/icons/instagram.svg'; 
import s from './GeneralSocial.module.css';

export default function GeneralSocial() {
  return (
    <div className={s.row__socials}>
                    <a href="https://www.facebook.com/" target="_blank"
                        rel="noopener noreferrer nofollow" aria-label="Facebook">
                        <Image src={Facebook} alt="Facebook" width={24} height={24} priority={true} className="hoverSvg"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank"
                         rel="noopener noreferrer nofollow" aria-label="Instagram">
                        <Image src={Instagram} alt="Instagram" width={24} height={24} priority={true} className="hoverSvg"/>
                    </a>
    </div>
  )
}
