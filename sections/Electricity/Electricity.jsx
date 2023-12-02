import s from './Electricity.module.css'
export default function Electricity() {
  return (
    <div className="section-main font-oswald">
        <div className="container-main">
            <div className={s.blocks}>
                <div className={s.block__title}>
                    <h2 className='title'>Electricity we produced for all time</h2>
                </div>
                <p className={s.block__description}><span className={s.block__coordinates}>1.134.147.814</span><span className={s.block__width}>kWh</span></p>
            </div>
        </div>
    </div>
  )
}
