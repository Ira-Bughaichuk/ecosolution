import BtnGeneral from "@/components/BtnGeneral/BtnGeneral";
import Image from "next/image";
import s from './Main.module.css';
import hero from '../../public/assets/images/hero.jpg';

export default function Main() {
  return (
    <div className="container-main"> 
        <div className={s.blockTop}>
            <h1 className="font-oswald mane-title">RENEWABLE ENERGY For any task</h1>
            <div className={s.block__description}>
                <p className={s.block__text}>
                    <span className="base-text font-firasans">Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass </span></p>
                <BtnGeneral title={'Learn more'}/>
            </div>
        </div>
        <div className={s.blockAddress}>
        <address className="font-firasans base-text">
            <span>79005, Ukraine, Lviv</span>
            <span>street. Shota Rustaveli, 7</span>
        </address>
        <a className="font-firasans base-text" href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        <p className="font-firasans base-text hidden tablet:flex">ecosolution &copy; 2023</p>
        </div>
        <Image 
            src={hero} 
            alt="Hero"  
            width={1240}
            height={524}
            sizes="100vw"
            loading="lazy"
            className="w-[319px] h-[200px] tablet:w-[708px] tablet:h-[348px] desktop:w-[1240px] desktop:h-[524px] object-cover" 
            />
    </div>
  )
}
