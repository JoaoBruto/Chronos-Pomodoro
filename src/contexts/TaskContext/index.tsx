import { createContext } from "react";

export const TaskContext = createContext({
  chave: 'valor', // Valor inicial do contexto. Só será usado se eu não tiver um provider
})