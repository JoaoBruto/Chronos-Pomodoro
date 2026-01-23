// import { Heading } from './components/Heading.tsx'
// import { TimerIcon } from 'lucide-react'
// import { App } from './App.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Container } from './components/Container/index.tsx'
import { Logo } from './components/LOGO/index.tsx'

import './Styles/global.css'
import './Styles/theme.css'
import { Menu } from './components/LOGO copy/index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

    </>
  </StrictMode>,
)
