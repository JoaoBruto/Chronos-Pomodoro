import { Container } from "../../../components/Container"
import { Footer } from "../../../components/Footer"
import { Logo } from "../../../components/LOGO"
import { Menu } from "../../../components/MENU"

type MainTemplateProps = {
  children: React.ReactNode;
}

export function MainTemplate ({children} : MainTemplateProps  ) {
  return(
    <>
          <Container>
            <Logo />
          </Container>
    
          <Container>
            <Menu />
          </Container>
    
          {children}
    
          <Container>
            <Footer></Footer>
          </Container>
    

        </>
    )
  }