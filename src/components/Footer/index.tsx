import styles from './styles.module.css'



export function Footer() {
   
  return(
    <>
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica Pomodoro 🍅</a>
      <a href="">Chronos Podomoro &copy; {new Date().getFullYear()}</a>
    </footer>
      
    </>
  )
}