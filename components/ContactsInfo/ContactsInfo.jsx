import Image from 'next/image';
import s from './ContactsInfo.module.css';
import Phone from '../../public/assets/icons/phone.svg';
import Map from '../../public/assets/icons/map.svg';
import Email from '../../public/assets/icons/email.svg';
import GeneralSocial from '../GeneralSocial/GeneralSocial';


export default function ContactsInfo() {
  return (
    <address className={s.address__container}>
        <ul className={s.address__list}>
            <li className={s.address__item}>
                <span className="base-text inline-block mb-2 desktop:mb-4">Phone:</span>
                <div className="contact-text mb-4">
                    <a className={`${s.row__info} hoverBtn`} href="tell:+380981234567" target="_blank"
                  rel="noopener noreferrer nofollow" aria-label="phone">
                        <Image src={Phone} alt="Phone" className="w-[24px] h-[24px]" priority={true} />
                        38 (098) 12 34 567
                    </a>
                </div>
                <div className="contact-text">
                    <a className={`${s.row__info} hoverBtn`}  href="tell:+380931234567" target="_blank"
                  rel="noopener noreferrer nofollow" aria-label="phone">
                        <Image src={Phone} alt="Phone" className="w-[24px] h-[24px]" priority={true} />
                        38 (093) 12 34 567
                    </a>
                </div>
            </li>
            <li>
                <span className="base-text inline-block mb-2 desktop:mb-4">E-mail:</span>
                <div className="contact-text">
                    <a className={`${s.row__info} hoverBtn`} href="mailto:office@ecosolution.com" target="_blank"
                  rel="noopener noreferrer nofollow"  aria-label="email">
                        <Image src={Email} alt="Email" className="w-[24px] h-[24px]" priority={true}/>
                        office@ecosolution.com
                    </a>              
                </div>
            </li>
            <li>
            <span className="base-text inline-block mb-2 desktop:mb-4">Address:</span>
                <div className="contact-text">
                    <a className={`${s.row__info} hoverBtn`} href="https://maps.app.goo.gl/pmoGC5Yf7tZ35uCb8" target="_blank" rel="noopener noreferrer" aria-label="map">
                        <Image src={Map} alt="Map" className="w-[24px] h-[24px]" priority={true}/>
                        <span className='inline-block w-[244px] desktop:w-[464px]'>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
                    </a>              
                </div>
            </li>
            <li>
            <span className="base-text inline-block mb-5 desktop:mb-4">Social Networks:</span>
                <GeneralSocial />
            </li>
        </ul>
    </address>
  )
}
