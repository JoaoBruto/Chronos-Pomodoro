import { StrictMode, type SetStateAction} from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/global.css'
import './Styles/theme.css'
import { Home } from './components/Pages/Home/index.tsx'
import type { TaskStateModel } from './models/TaskStateModel.ts'

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    worktime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}



createRoot(document.getElementById('root')!).render(
 // Sempre que eu usar useState, não vou usar atribuição direta
 // Sempre que uma variável depender da variável anterior, deve-se colocar uma arrow function 'setFunção((prevState) => "o que ocorre")'
 

  <StrictMode>  
    <>
    <Home state={{
        tasks: [],
        secondsRemaining: 0,
        formattedSecondsRemaining: '',
        activeTask: null,
        currentCycle: 0,
        config: {
          worktime: 0,
          shortBreakTime: 0,
          longBreakTime: 0
        }
      }} setState={function (): void {
        throw new Error('Function not implemented.')
      } } /> 
     
    </>
  </StrictMode>,
)
