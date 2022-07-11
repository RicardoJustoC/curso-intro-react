import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Hubo un error...</p>}
        {loading && <p>Estamos cargando...</p>}
        {!loading && !searchedTodos.length && <p>crea tu primer TODO</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}
export { AppUI };
