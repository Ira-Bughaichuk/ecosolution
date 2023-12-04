import BtnHeader from "@/components/BtnHeader/BtnHeader";
import { detailsList } from "@/utils/Data/detailsList";
import s from "./FAQ.module.css";

export default function FAQ() {
  return (
    <div id="/faq" className="section-main">
      <div className="container-main">
        <div className={s.blocks}>
          <div className={s.block__title}>
            <h2 className="title font-oswald">Frequently Asked Questions</h2>
          </div>
          <div className={s.block__left}>
            <div className={s.block__left__list}>
              {detailsList.map(item=>(
                <details className={s.block__left__item} key={item.id}>
                  <summary className={s.block__left__summary}><span className="font-firasans subBase-text">{item.summery}</span></summary>
                  <p className="font-firasans text-justify text-sm font-normal -leading-[0.56px] desktop:text-base desktop:-leading-[0.64px]">{item.text}</p>
                </details>
              ))}
              </div>
          </div>

          <div className={s.block__right}>
            <div className={s.block__right__title}>
              <h2 className="title font-oswald">Frequently Asked Questions</h2>
            </div>
            <div className={s.block__right__contact}>
              <span className="font-firasans subBase-text">Didn`t find the answer to your question? </span>
              <div className={s.block__right__btn}>
              <BtnHeader title={"Contact Us"} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
