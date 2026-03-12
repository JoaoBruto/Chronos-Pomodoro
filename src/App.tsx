
import { useState } from "react";
import { Home } from "./components/Pages/Home";
import type { TaskStateModel } from "./models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null, // Inicialmente é nulo
  currentCycle: 0, 
  config: {
    worktime: 25, // Pomodoro normal
    shortBreakTime: 5, // Pequena pausa
    longBreakTime: 15, // Pausa longa
  },
}


export function App () {
  const [state, setState] = useState(initialState);
  return <Home state={state} setState={setState} /> // Mesmo nome das chaves na função e estado
}
