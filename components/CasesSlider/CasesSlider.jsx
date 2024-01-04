import Image from "next/image";
import s from "./CasesSlider.module.css";
import Slide from "../../public/assets/images/slider-1.jpg";
import ArrowRight from '../../public/assets/icons/arrow-right.svg';



export default function CasesSlider({ title, text, srcImg, data}) {
  return (
    <div className={s.cart}>
      <Image src={srcImg} alt={title} width={320} height={168} loading="lazy" sizes="(max-width: 1279px) 342px, 596px"/>
      <div className={s.block}>
        <div className={s.row__top}>
            <p className={s.row__top__title}>{title}</p>
            <button className={s.btn} >
               <Image src={ArrowRight} alt="arrow" width={28} height={28} className="-rotate-45  rounded-full hoverSvg"/>
            </button> 
        </div>
        <div className={s.row__bottom}>
            <p>{text}</p>
            <p>{data}</p>
        </div>
      </div>
    </div>
  );
}
