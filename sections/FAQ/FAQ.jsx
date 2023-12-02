import BtnHeader from "@/components/BtnHeader/BtnHeader";
import s from "./FAQ.module.css";

export default function FAQ() {
  return (
    <div className="section-main">
      <div className="container-main">
        <div className={s.blocks}>
          <div className={s.block__title}>
            <h2 className="title font-oswald">Frequently Asked Questions</h2>
          </div>
          <div className={s.block__left}>
            <details className={s.block__left__item}>
              <summary className={s.block__left__summary}><span className="font-firasans subBase-text">How do wind turbines and solar panels work together in a renewable energy system?</span></summary>
              <p className="font-firasans text-sm font-normal -leading-[0.56px] desktop:text-base desktop:-leading-[0.64px]">Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.</p>
            </details>
          </div>

          <div className={s.block__right}>
            <div className={s.block__right__title}>
              <h2 className="title font-oswald">Frequently Asked Questions</h2>
            </div>
            <div className={s.block__right__contact}>
              <p className="font-firasans subBase-text">Didn`t find the answer to your question? </p>
              <BtnHeader title={"Contact Us"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
