import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/global.css'
import './Styles/theme.css'
import { Heading } from './components/Heading'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Heading/>
      <h1>Olá mundo!</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit accusantium fuga facere reiciendis dolor fugit aperiam provident dignissimos itaque magni, ex ratione temporibus molestiae explicabo et ipsa. Perferendis, animi?</p>

    </>
  </StrictMode>,
)
