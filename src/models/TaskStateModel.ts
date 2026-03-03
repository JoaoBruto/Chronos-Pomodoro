import type { TaskModel } from "./TaskModel"

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  // Histórico, MainForm
  tasks: TaskModel[]; // Histórico,  MainFom

  // Configurações do Timer
  secondsRemaining: number; // Home, CountDown, Histórico, Form (para saber se o botão é para iniciar ou parar), Button
  formattedSecondsRemaining: string; // Titulo, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, Form (para saber se o botão é para iniciar ou parar), Button
  currentCycle: number; // Home

  // Configurações dos ciclos
  config: { // Conjunto para exportar os models
    worktime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  }
}