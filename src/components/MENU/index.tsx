import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, } from 'lucide-react'
import styles from './style.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // não segue o link, apenas executa o código
  
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme
    });

    
  }

  // useEffect(() => {
  //  console.log('useEffect ', Date.now());
  //}); Executa todas as vezes que o componente renderiza na tela

  // useEffect(() => {
  //  console.log('useEffect')
  // }, []) // Executa apenas uma vez. Melhor para usar com API

  useEffect(() => {
    console.log('Theme mudou',theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    return() => {
      console.log('Atualizando este componente'); // Assim evita de acumular aplicações na página e travar ela. (CleanUp)
    }
  }, [theme]) // Só executa quando o theme muda

  return(
    <>
      <nav className={styles.menu}>
        <a className={styles.menuLink} href='#' aria-label='Ir para a Home' title='Ir para a Home'>
          
          <HouseIcon />
        </a>
        <a className={styles.menuLink} href='#' aria-label='Ver histórico' title='Ver histórico'>
          <HistoryIcon />
        </a>
        <a className={styles.menuLink} href='#' aria-label='Ir para configurações'title='Ir para configurações'>
          <SettingsIcon />
        </a>
        <a className={styles.menuLink} href='#' aria-label='Mudar tema de cor' title='Mudar tema de cor' onClick={(event) => handleThemeChange(event)}>
          <SunIcon />
        </a>
        
      </nav>
    </>
  )
}