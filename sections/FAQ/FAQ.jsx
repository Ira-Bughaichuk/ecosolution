'use client';
import { oswald } from '@/font/font';
import { useState } from 'react';
import BtnHeader from "@/components/BtnHeader/BtnHeader";
import { detailsList } from "@/utils/Data/detailsList";
import s from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div id="/faq" className="section-main">
      <div className="container-main">
        <div className={s.blocks}>
          <div className={s.block__title}>
            <h2 className={`${oswald.className} title text-left`}>Frequently Asked Questions</h2>
          </div>
          <div className={s.block__left}>
            <div className={s.block__left__list}>
              {detailsList.map((item, index) =>(
                <details className={`${s.block__left__item} ${openIndex === index ? s.opened : ''}`}
                 key={item.id} open={openIndex === index} onClick={(e) => {
                  e.preventDefault();
                  handleToggle(index);
                }}>
                  <summary className={s.block__left__summary}><span className="subBase-text">{item.summery}</span></summary>
                  <p className="text-justify text-sm font-normal -leading-[0.56px] desktop:text-base desktop:-leading-[0.64px]">{item.text}</p>
                </details>
              ))}
              </div>
          </div>

          <div className={s.block__right}>
            <div className={s.block__right__title}>
              <h2 className="title">Frequently Asked Questions</h2>
            </div>
            <div className={s.block__right__contact}>
              <span className="subBase-text">Didn`t find the answer to your question? </span>
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
