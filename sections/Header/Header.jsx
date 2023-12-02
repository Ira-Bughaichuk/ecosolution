import BtnHeader from "@/components/BtnHeader/BtnHeader";
import BtnNavOpen from "@/components/BtnNavOpen/BtnNavOpen";
import Logo from "@/components/Logo/Logo";
import s from "./Header.module.scss";

export default function Header({ handleOpen }) {
  return (
    <header className={s.header}>
      <div className="container-main">
        <div className={s.block}>
          <Logo />
          <div className={s.block__right}>
            <BtnNavOpen handleOpen={handleOpen} />
            <div className={s.block__right__btn}>
              <BtnHeader title={"Get in touch"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
