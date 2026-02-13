import { MainTemplate } from "../../../Styles/Templates/MainTemplate";
import { Container } from "../../Container";
import { CountDown } from "../../Count Down";
import { MainForm } from "../../MainForm";



export function Home () {
  return(
    <MainTemplate>
          <Container>
            <CountDown />
          </Container>

          <Container>
            <MainForm />
          </Container>
    </MainTemplate>
    )
  }