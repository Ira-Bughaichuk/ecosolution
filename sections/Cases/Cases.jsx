import s from "./Cases.module.css";
import Image from "next/image";

import Global from '../../public/assets/icons/global-edit.svg';
import Circle from '../../public/assets/icons/maximize-circle.svg';
import Charge from '../../public/assets/icons/cpu-charge.svg';
import Ranking from '../../public/assets/icons/ranking.svg';
import Cart from './../../components/Cart/Cart';
import part1 from '../../public/assets/images/main-right.jpg';
import part2 from '../../public/assets/images/main-left.jpg';

export default function Cases() {
  return (
    <div className="section-main">
      <div className="container-main">
        <div className={s.blocks}>
        <div className={s.block__top}>
          <div className={s.block__title}>
            <h2 className="title font-oswald">Main values of our company</h2>
          </div>
            <p className={`${s.block__text}  base-text`}>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world`s energy needs.</p>
        </div>
        <div className={s.parent}>
          <div className={s.div1 }> <Cart img={Circle} title={"Openness"} text={"to the world, people, new ideas and projects"}/>
          </div>
          <div className={s.div2}><Cart img={Global} title={"Responsibility"} text={"we are aware that the results of our work have an impact on our lives and the lives of future generations"}/> </div>
          <div className={s.div3}><Image src={part1} alt="People" className="hidden tablet:block w-auto tablet:h-[197px] desktop:h-[339px] object-cover"/> </div>
          <div className={s.div4}><Image src={part2} alt="Solar panels" className="hidden tablet:block  w-auto tablet:h-[197px] desktop:h-[339px] object-cover"/> </div>
          <div className={s.div5}><Cart img={Charge} title={"Innovation"} text={"we use the latest technology to implement non-standard solutions"}/> </div>
          <div className={s.div6}><Cart img={Ranking} title={"Quality"} text={"we do not strive to be the first among others, but we want to be the best in our business"}/> </div>
        </div>
      </div>
    </div>
    </div>
  );
}

// width={596}
// height={339}
// className="hidden tablet:block tablet:w-[342px] tablet:h-[197px] desktop:w-[596px] desktop:h-[339px] object-cover"