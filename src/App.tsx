// PascalCase (Letra maiúscula no começo)
// App
// ExemploDeComponente




type AppProps = {
  logo: string;
  menu: string;
  history: string;
}

export function App (props : AppProps) {


  return (
    <>
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
