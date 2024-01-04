"use client";
import  CasesSwiper  from '@/components/CasesSwiper/CasesSwiper';
import CasesSwiperNav from '@/components/CasesSwiperNav/CasesSwiperNav';

import { useState } from "react";
import s from './Cases.module.css';

export default function Cases() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <div id="/cases" className="section-main">
      <div className="container-main">
        <div className={s.blocks}>
          <div className={s.block__top}>
            <div className={s.block__title}>
              <h2 className="title font-oswald">Successful cases of our company</h2>
            </div>
            <div className={s.block__btns}>
            <CasesSwiperNav />
              <p className={s.block__counter}>
              {`0${activeIndex}`}<span className={s.block__counterLight}> / 05</span>
            </p>
            </div>
          </div>
          <div>
            <CasesSwiper onSlideChange={handleSlideChange}/>
          </div>
        </div>
      </div>
    </div>
  );
}
