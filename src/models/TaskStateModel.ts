import type { TaskModel } from "./TaskModel"

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  // Histórico, MainForm
  tasks: TaskModel[];

  // Configurações do Timer
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;

  // Configurações dos ciclos
  config: {
    worktime: number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}