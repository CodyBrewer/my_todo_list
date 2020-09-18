import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTasks, toggleCompleted } from './todosSlice';


const Todos = () => {
    
    const tasks = useSelector(selectTasks);
    
    return (
        <>
        {tasks.map((todo) => (
            <Todo todo={todo} />
            ))}
        <TodoForm />
      </>  
    );
};

const Todo = (props) => {
    const { id, completed, task } = props.todo;
    const dispatch = useDispatch();

    return (
        <>
            <label
                htmlFor="task"
                style={{
                    textDecoration: completed
                        ? 'line-through'
                        : undefined,
                }}
            >
                <input
                    type="checkbox" 
                    name="task"
                    id="task"
                    check={completed}
                    onClick={() => dispatch(toggleCompleted(id))}
                />{task}
            </label>
        </>
    );
};

const TodoForm = () => {    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch(); // create dispatch fn to dispatch actions
    let input; // input ref

    // submit handler
    const handleSubmit = (event) => {
        // prevent page reloading
        event.preventDefault();
        // check input value is a string
        if (!input.value.trim()) {
            return;
        };
        dispatch(addTodo(input.value));
        input.value = '';

    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newTodo">New Task</label>
            <input 
                type="text"
                name="newTodo"
                id="newTodo"
                title="newTodo"
                placeholder="...new task..."
                ref={(node) => (input = node)}
            />
            <button type="submit">Add task</button>
        </form>
    );
};

export default Todos;