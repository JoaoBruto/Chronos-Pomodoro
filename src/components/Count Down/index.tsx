import { HomeProps } from '../Pages/Home'
import styles from './style.module.css'


export function CountDown({state}: HomeProps) {
   
  return(
    <>
      <div className={styles.container}>
        {state.formattedSecondsRemaining}
      </div>
    </>
  )
}