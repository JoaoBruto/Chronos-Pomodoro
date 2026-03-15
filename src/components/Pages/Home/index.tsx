import type { TaskStateModel } from "../../../models/TaskStateModel";
import { MainTemplate } from "../../../Styles/Templates/MainTemplate";
import { Container } from "../../Container";
import { CountDown } from "../../Count Down";
import { MainForm } from "../../MainForm";


export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;

}

export function Home (props: HomeProps) { // Repassa o estado por props
  
  return(
    <MainTemplate>
          
          <Container>
            <CountDown {...props}/>
          </Container>

          <Container>
            <MainForm {...props}/>
          </Container>
    </MainTemplate>
    )
  }