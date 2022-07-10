import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de intro a react", completed: false },
//   { text: "Enamorar mujeres", completed: false },
//   { text: "Comer saludable", completed: true },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}
export default App;
