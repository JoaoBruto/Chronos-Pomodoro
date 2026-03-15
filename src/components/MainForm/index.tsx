import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../Input";
import type { HomeProps } from "../Pages/Home";

export function MainForm({state} : HomeProps) {
  return (
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
             labelText='1'
              id='meuInput'
              type='text'
              placeholder='Digite algo' />
          </div>

          <div className='formRow'>
            <p>Próximo intervalo é de {state.config.worktime}min</p>
          </div>

          <div className='formRow'>
            <Cycles></Cycles>
          </div>

          <div className='formRow'>
            <DefaultButton color='green'>
              <PlayCircleIcon></PlayCircleIcon>
            </DefaultButton>
          </div>
        </form>

  )
}