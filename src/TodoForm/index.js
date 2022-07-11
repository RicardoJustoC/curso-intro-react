import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {setOpenModal,addTodo} = React.useContext(TodoContext);
    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    };
    const onCancel=()=>{
        setOpenModal(false);
    };
    const onSubmit=(event)=>{
        console.log('event',event);
        event.preventDefault();
        addTodo(newTodoValue);       
        //addTodo(event.target['todoTextArea'].value);
        setOpenModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe el TODO</label>
            <textarea placeholder="Escribe lo que quieras"
            value={newTodoValue}
            onChange={onChange} 
            name="todoTextArea"></textarea>
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel}
                className='TodoForm-button TodoForm-button--cancel'>Cancel</button>
                <button type="submit"
                className="TodoForm-button TodoForm-button--add">add</button>
            </div>
        </form>
    );
}
export {TodoForm};