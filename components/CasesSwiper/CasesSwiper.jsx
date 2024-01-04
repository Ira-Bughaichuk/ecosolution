"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import  CasesSlider  from "@/components/CasesSlider/CasesSlider";
import { casesList } from "@/utils/Data/CasesList";
import './cases.css';



const carouselSettings = {
  grabCursor: true,
  loop: true,
  slidesPerView: 1, 
  spaceBetween: '24px',
  speed: 1500,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: '24px',
        slidesPerView: 2,
    },
    1280: {
      spaceBetween: '48px',
      slidesPerView: 2,
    },
  },
};

export default function CasesSwiper({ onSlideChange }) {
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    onSlideChange(activeIndex + 1);
  };
  return (
      <Swiper {...carouselSettings} onSlideChange={handleSlideChange} className="flex justify-center relative">
        {casesList && casesList.map((item) => (
          <SwiperSlide key={item.id} >
            {({ isActive }) =>
             <CasesSlider isActive={isActive}  title={item.title} text={item.text} srcImg={item.image} data={item.data}/>}
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
