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
import { Footer } from './components/Footer/index.tsx'
import { MainForm } from './components/MainForm/index.tsx'



createRoot(document.getElementById('root')!).render(
 // Sempre que eu usar useState, não vou usar atribuição direta
 // Sempre que uma variável depender da variável anterior, deve-se colocar uma arrow function 'setFunção((prevState) => "o que ocorre")'
  <StrictMode>
    
    <>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <Footer></Footer>
      </Container>

      <Container>
        <MainForm />
      </Container>


    </>
  </StrictMode>,
)
