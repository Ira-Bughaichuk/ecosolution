
import s from './Cases.module.css';
import  CasesSwiper  from '@/components/CasesSwiper/CasesSwiper';

export default function Cases() {
  return (
    <div id="/cases" className="section-main">
      <div className="container-main">
        <div className={s.blocks}>
          <div className={s.block__top}>
            <div className={s.block__title}>
              <h2 className="title font-oswald">Successful cases of our company</h2>
            </div>
            <div className={s.block__btns}></div>
          </div>
          <div>
            <CasesSwiper />
          </div>
        </div>
      </div>
    </div>
  );
}
