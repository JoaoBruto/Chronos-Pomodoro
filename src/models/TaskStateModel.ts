import type { TaskModel } from "./TaskModel"

export type TaskStateModel = {
  tasks: TaskModel[];
  // Configurações do Timer
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 a 8
  // Configurações dos ciclos
  config: {
    worktime: number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}