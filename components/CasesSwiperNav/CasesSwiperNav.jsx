import Image from "next/image";
import NavRight from "../../public/assets/icons/slide-nav-right.svg";
import NavLeft from "../../public/assets/icons/slide-nav-right.svg";
import "./CasesSwiperNav.css";

export default function CasesSwiperNav() {
  return (
    <div className="flex ml-auto h-[66px] relative mr-0 w-[150px] desktop:h-[88px] desktop:w-[192px]">
      <button
        type="button"
        className="swiper-button swiper-button-prev"
        aria-label="button-back"
      >
        <Image
          src={NavRight}
          alt="arrow right"
          width={36}
          height={36}
        />
      </button>
      <button
        type="button"
        className="swiper-button swiper-button-next"
        aria-label="button-next"
      >
        <Image
          src={NavLeft}
          alt="arrow left"
          width={36}
          height={36}
        />
      </button>
    </div>
  );
}
