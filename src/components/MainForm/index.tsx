import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../Input";

export function MainForm() {
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
            <p>Lorem ipsum dolor sit amet.</p>
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