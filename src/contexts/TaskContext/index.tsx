import { Children, createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

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

type TaskContextPros = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>> // Função do setState, mas do useState
}

type TaskContextProviderProps = {
  children: React.ReactNode // Definir type para children, para não dar erro
}

export function TaskContextProvider({children}: TaskContextProviderProps) {
  // O provider define o novo valor para TaskContext
  return (
  <TaskContext.Provider value={{outraCoisa: 321}}> 
    {children}
  </TaskContext.Provider>
  )
}

export const TaskContext = createContext({ // Valor inicial do contexto. Só será usado se eu não tiver um provider
  state: initialState,
  setState: () => {}, 
})

