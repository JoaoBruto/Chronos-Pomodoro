// import { Heading } from './components/Heading.tsx'
// import { TimerIcon } from 'lucide-react'
// import { App } from './App.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Container } from './components/Container/index.tsx'
import { Logo } from './components/LOGO/index.tsx'

import './Styles/global.css'
import './Styles/theme.css'
import { Menu } from './components/MENU/index.tsx'
import { CountDown } from './components/Count Down/index.tsx'
import { DefaultInput } from './components/Input/index.tsx'
import { Cycles } from './components/Cycles/index.tsx'
import { DefaultButton } from './components/DefaultButton/index.tsx'
import { PlayCircleIcon } from 'lucide-react'
import { Footer } from './components/Footer/index.tsx'



createRoot(document.getElementById('root')!).render(
 // Sempre que eu usar useState, não vou usar atribuição direta
 // Sempre que uma variável depender da variável anterior, deve-se colocar uma arrow function 'setFunção((prevState) => "o que ocorre")'
  <StrictMode>
    
    <>

      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <CountDown></CountDown>
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
             labelText='1'
              id='meuInput'
              type='text'
              placeholder='Digite algo' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles></Cycles>
          </div>

          <div className='formRow'>
            <DefaultButton color='green'>
              <PlayCircleIcon></PlayCircleIcon>
            </DefaultButton>
          </div>
        </form>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>


    </>
  </StrictMode>,
)
