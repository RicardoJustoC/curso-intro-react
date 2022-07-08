import React from "react";
import { AppUI } from "./AppUI";
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de intro a react", completed: false },
//   { text: "Enamorar mujeres", completed: false },
//   { text: "Comer saludable", completed: true },
// ];
function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem=[];
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem]=React.useState(parsedItem);
  const saveItem = (newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);//para renderizar la nueva lista de Item
  };
  return [item, saveItem];
}
function App() {
  const [todos, saveTodo] = useLocalStorage('TODOS_V1',[]);
  
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo=>todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos ={};
  if(!searchValue.length>=1){
    searchedTodos=todos;
  }else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];//copia inmutable
    newTodos[todoIndex].completed=true;
    saveTodo(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];//copia inmutable
    newTodos.splice(todoIndex,1);
    
    saveTodo(newTodos);
  };
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}
export default App;
