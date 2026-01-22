import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/global.css'
import './Styles/theme.css'
// import { Heading } from './components/Heading.tsx'
// import { TimerIcon } from 'lucide-react'
// import { App } from './App.tsx'
import { Container } from './components/Container.tsx'
import { Heading } from './components/Heading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  </StrictMode>,
)
