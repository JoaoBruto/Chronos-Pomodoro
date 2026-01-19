import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <App></App>
      <h1>Olá mundo!</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit accusantium fuga facere reiciendis dolor fugit aperiam provident dignissimos itaque magni, ex ratione temporibus molestiae explicabo et ipsa. Perferendis, animi?</p>

    </div>
  </StrictMode>,
)
