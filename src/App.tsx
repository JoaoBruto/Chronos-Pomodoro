
import { useState } from "react";
import { Home } from "./components/Pages/Home";
import type { TaskStateModel } from "./models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    worktime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}


export function App () {
  const [state, setState] = useState(initialState);
  return <Home state={state} setState={setState} />
}
