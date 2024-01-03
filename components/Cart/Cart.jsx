import Image from 'next/image';
import s from './Cart.module.css';

export default function Cart({img,title, text}) {
  return (
    <div className={s.cart}>
            <div className={s.cart__title}>
              <Image  src={img} alt="Circle" className="w-4 h-4 hoverSvg"/>
              <h3 className="font-oswald text-primary text-base tablet:text-[18px] desktop:text-[32px] desktop:leading-[48px] leading-6 font-normal uppercase">{title}</h3> 
            </div> 
           <p className={s.cart__text}>{text}</p>
          </div>
  )
}
