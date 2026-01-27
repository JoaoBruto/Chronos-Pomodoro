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


createRoot(document.getElementById('root')!).render(
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
            <DefaultInput type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>

    </>
  </StrictMode>,
)
