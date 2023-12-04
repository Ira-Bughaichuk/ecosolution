import Image from 'next/image'
import NavRight from '../../public/assets/icons/slide-nav-right.svg';
import NavLeft from '../../public/assets/icons/slide-nav-right.svg';
import s from './CasesSwiperNav.css';

// `${s.block}  ${swiperReady ? 'opacity-100' : 'opacity-0'}`
export default function CasesSwiperNav({swiperReady, prevBtnRef, nextBtnRef }) {
  return (
    <div className={s.blocks__btns}>
        <button type="button" ref={prevBtnRef} className={s.btn__sliderNav}><Image src={NavRight} alt="arrow right" width={36} height={36} className="rotate-180"/></button>
        <button type="button" ref={nextBtnRef} className={s.btn__sliderNav}><Image src={NavLeft} alt="arrow left" width={36} height={36}  className="rounded-full hoverSvg"/></button>
    </div>
  )
}
