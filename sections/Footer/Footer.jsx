import Image from "next/image";
import GeneralSocial from "@/components/GeneralSocial/GeneralSocial";
import ArrowRight from "../../public/assets/icons/arrow-right.svg";
import Logo from "@/components/Logo/Logo";
import scrollToSection from '../../utils/scrollToSection';
import s from "./Footer.module.scss";

export default function Footer() {
  const handleButtonClick = () => {
    scrollToSection('/main');
  };
  return (
    <footer className={s.footer__part}>
      <div className="container-main">
        <div className={s.block__tablet}>
          <div className={s.block__info__logo}>
            <Logo />
            <p className="base-text">
              <span>79005, Ukraine, Lviv</span>
              <span>street. Shota Rustaveli, 7</span>
            </p>
          </div>
          <div className={s.block__info__social}>
            <GeneralSocial />
            <a className="base-text" href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </a>
          </div>
          <div className={s.block__info__btn}>
            <button className={`${s.footer__btn} hoverBtn `} type='button' onClick={handleButtonClick}>
              <Image
                src={ArrowRight}
                alt="arrow"
                className="w-[16px] h-[16px]"
                priority={true}
              />
            </button>
            <p className="base-text hidden tablet:flex">
              ecosolution &copy; 2023
            </p>
          </div>
        </div>

        <div className={s.block__mobile}>
          <div className={s.row__top}>
            <div className={s.row__logo}>
              <Logo />
              <div className={s.block__info__btn}>
                <button type='button' className={`${s.footer__btn} group`}>
                  <Image
                    src={ArrowRight}
                    alt="arrow"
                    width={16}
                    height={16}
                    className=" w-[32px] h-[32px]  bg-secondary  rounded-full hoverSvg"
                  />
                </button>
              </div>
            </div>
            <GeneralSocial />
          </div>
          <address className={s.row__bottom}>
            <p className="base-text cursor-pointer text-center">
              <span>79005, Ukraine, Lviv</span>
              <span>street. Shota Rustaveli, 7</span>
            </p>
            <a className="base-text cursor-pointer" href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </a>
            <p className="base-text hidden tablet:flex cursor-pointer">
              ecosolution &copy; 2023
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}
