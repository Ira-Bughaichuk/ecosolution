import { oswald } from '@/font/font';
import Image from "next/image";
import BtnGeneral from "@/components/BtnGeneral/BtnGeneral";
import hero from '../../public/assets/images/hero.jpg';
import s from './Main.module.css';

export default function Main() {
  return (
    <div id="/main" className={s.section__main}>
        <div className="container-main"> 
            <div className={s.blockTop}>
                <h1 className={` ${oswald.className} mane-title `}>RENEWABLE ENERGY For any task</h1>
                <div className={s.block__description}>
                    <p className={s.block__text}>
                        <span className="base-text">Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass </span></p>
                    <BtnGeneral title={'Learn more'}/>
                </div>
            </div>
            <address className={s.blockAddress}>
            <p className="base-text">
                <span>79005, Ukraine, Lviv</span>
                <span>street. Shota Rustaveli, 7</span>
            </p>
            <a className="base-text" href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            <p className="base-text hidden tablet:flex">ecosolution &copy; 2023</p>
            </address>
            <Image 
                src={hero} 
                alt="Hero"  
                width={1240}
                height={524}
                loading="lazy"
                sizes="(max-width: 767px) 708px, (max-width: 1279px) 1240px"
                // sizes="100vw"
                // className="w-[319px] h-[200px] tablet:w-[708px] tablet:h-[348px] desktop:w-[1240px] desktop:h-[524px] object-cover" 
                />
        </div>
    </div>
  )
}
