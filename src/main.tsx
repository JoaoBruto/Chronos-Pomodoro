import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/global.css'
import './Styles/theme.css'
import { Home } from './components/Pages/Home/index.tsx'


createRoot(document.getElementById('root')!).render(
 // Sempre que eu usar useState, não vou usar atribuição direta
 // Sempre que uma variável depender da variável anterior, deve-se colocar uma arrow function 'setFunção((prevState) => "o que ocorre")'
  <StrictMode>  
    <>
      <Home /> 
    </>
  </StrictMode>,
)
