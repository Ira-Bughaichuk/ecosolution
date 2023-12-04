"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import './cases.css';

import  CasesSlider  from "@/components/CasesSlider/CasesSlider";
import CasesSwiperNav from "../CasesSwiperNav/CasesSwiperNav";
import { casesList } from "@/utils/Data/CasesList";

const carouselSettings = {
  grabCursor: true,
  loop: true,
  slidesPerView: 2, 
  spaceBetween: '24px',
  loopedslides: 1,
  wrapperTag: "ul",
  speed: 1500,
  breakpoints: {
    768: {
      spaceBetween: '24px',
        slidesPerView: 2,
    },
    1280: {
      spaceBetween: '48px',
    },
  },
};
export default function CasesSwiper() {
  const [swiperReady, setSwiperReady] = useState(false);

  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    if (prevBtnRef && nextBtnRef) {
      setSwiperReady(true);
    }
  }, [prevBtnRef, nextBtnRef]);
  return (
    <>
      <CasesSwiperNav
        swiperReady={swiperReady}
        prevBtnRef={prevBtnRef}
        nextBtnRef={nextBtnRef}
      />
      <Swiper
        {...carouselSettings}
        navigation={{
          prevEl: prevBtnRef?.current,
          nextEl: nextBtnRef?.current,
        }}
        modules={[Navigation]}
        className="flex justify-center relative"
      >
        {casesList.map((item) => (
          <SwiperSlide key={item.id} tag="li">
            {({ isActive }) =>
             <CasesSlider isActive={isActive}  title={item.title} text={item.text} srcImg={item.image} data={item.data}/>}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
