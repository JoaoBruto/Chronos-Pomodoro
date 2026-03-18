import { StrictMode, type SetStateAction} from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/global.css'
import './Styles/theme.css'
import { Home } from './components/Pages/Home/index.tsx'
import { TaskContext } from './contexts/TaskContext/index.tsx'





createRoot(document.getElementById('root')!).render(
 // Sempre que eu usar useState, não vou usar atribuição direta
 // Sempre que uma variável depender da variável anterior, deve-se colocar uma arrow function 'setFunção((prevState) => "o que ocorre")'
 

  <StrictMode>  
    <>
    <TaskContext.Provider value={{novo_valor: '1512'}}>
      <Home /> 
    </TaskContext.Provider> 
    
     
    </>
  </StrictMode>,
)
