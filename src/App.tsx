// PascalCase (Letra maiúscula no começo)
// App
// ExemploDeComponente

import { useState } from "react";



type AppProps = {
  logo: string;
  menu: string;
  history: string;
}

export function App (props : AppProps) {
  const [numero, setNumero] = useState(0)

   function handleClick() {
    setNumero(numero + 1);
   }


  return (
    <>
      <h1>Numero: {numero}</h1>
      <button onClick={handleClick}></button>
      <div className="container">
        <div className="content">
          <section>{props.logo}</section>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <section>{props.menu}</section>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <section>{props.history}</section>
        </div>
      </div>

      
    </>
  )
}
