import { oswald } from '@/font/font';
import { useState, useEffect } from 'react';
import formatNumberWithDot from '../../utils/formatNumberWithDot';
import s from './Electricity.module.css';


export default function Electricity() {
  const [count, setCount] = useState(1134147814);
  const finalCount = formatNumberWithDot(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 


  return (
    <div className="section-main">
        <div className={`${oswald.className}  container-main`}>
            <div className={s.blocks}>
                <div className={s.block__title}>
                    <h2 className='title titleCenter'>Electricity we produced for all time</h2>
                </div>
                <p className={s.block__description}><span className={s.block__coordinates}>{finalCount}</span><span className={s.block__width}>kWh</span></p>
            </div>
        </div>
    </div>
  )
}
