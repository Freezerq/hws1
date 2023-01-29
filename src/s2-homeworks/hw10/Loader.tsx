import s from './Loader.module.css'
import loader from '../../hearts.svg'

export const Loader = () => <div style={{ width: '150px', height: '70px'}} ><img className={s.loader} src={loader} alt=""/></div>
