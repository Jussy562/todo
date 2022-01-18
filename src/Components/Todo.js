import React from 'react'
import { useState } from 'react/cjs/react.development'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo, date}) {
        
    
        const [edit, setEdit] = useState({
            id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit(
            {
                id: null,
                value: ''
            }
        );
    };

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 
        'todo-row complete' : 
        'todo-row'} 
        key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}

               
               
                <p>{todo.time}</p>
                
            </div>

            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    className='del-icon'
                />
                <TiEdit
                    onClick={() => setEdit( {id: todo.id, value: todo.text} )}
                    className='edit-icon' 
                />
            </div>
        </div>
    )) 
}

export default Todo
