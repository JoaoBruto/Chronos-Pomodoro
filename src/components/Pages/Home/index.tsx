import type { TaskStateModel } from "../../../models/TaskStateModel";
import { MainTemplate } from "../../../Styles/Templates/MainTemplate";
import { Container } from "../../Container";
import { CountDown } from "../../Count Down";
import { MainForm } from "../../MainForm";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home (props: HomeProps) { // Repassa o estado por props
  const {state, setState} = props;
  
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