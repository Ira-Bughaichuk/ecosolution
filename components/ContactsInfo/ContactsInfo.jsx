import Image from 'next/image';
import s from './ContactsInfo.module.css';
import Phone from '../../public/assets/icons/phone.svg';
import Map from '../../public/assets/icons/map.svg';
import Email from '../../public/assets/icons/email.svg';
import Facebook from '../../public/assets/icons/facebook.svg';
import Instagram from '../../public/assets/icons/instagram.svg'; 

export default function ContactsInfo() {
  return (
    <address>
        <ul className={s.address__list}>
            <li className={s.address__item}>
                <span className="font-firasans base-text inline-block mb-2 desktop:mb-4">Phone:</span>
                <div className="font-firasans contact-text mb-4">
                    <a className={s.row__info} href="tell:+380981234567">
                        <Image src={Phone} alt="Phone" width={24} height={24} className="hoverSvg"/>
                        38 (098) 12 34 567
                    </a>
                </div>
                <div className="font-firasans contact-text">
                    <a className={s.row__info}  href="tell:+380931234567">
                        <Image src={Phone} alt="Phone" width={24} height={24} className="hoverSvg"/>
                        38 (093) 12 34 567
                    </a>
                </div>
            </li>
            <li>
                <span className="font-firasans base-text inline-block mb-2 desktop:mb-4">E-mail:</span>
                <div className="font-firasans contact-text">
                    <a className={s.row__info} href="mailto:office@ecosolution.com">
                        <Image src={Email} alt="Email" width={24} height={24} className="hoverSvg"/>
                        office@ecosolution.com
                    </a>              
                </div>
            </li>
            <li>
            <span className="font-firasans base-text inline-block mb-2 desktop:mb-4">Address:</span>
                <div className="font-firasans contact-text">
                    <a className={s.row__info} href="https://maps.app.goo.gl/pmoGC5Yf7tZ35uCb8" target="_blank" rel="noopener noreferrer">
                        <Image src={Map} alt="Map" width={24} height={24} className="hoverSvg"/>
                        <span className='inline-block w-[244px] desktop:w-[464px]'>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
                    </a>              
                </div>
            </li>
            <li>
            <span className="font-firasans base-text inline-block mb-5 desktop:mb-4">Social Networks:</span>
                <div className={s.row__socials}>
                    <a href="https://www.facebook.com/">
                        <Image src={Facebook} alt="Facebook" width={24} height={24} className="hoverSvg"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <Image src={Instagram} alt="Instagram" width={24} height={24} className="hoverSvg"/>
                    </a>
                </div>
            </li>
        </ul>
    </address>
  )
}
