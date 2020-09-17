import React from 'react';

const todos = [
    {
        task: "Complete ToDos Feature",
        completed: false,
    },
    {
        task: "Add Redux to Todos feature",
        completed: false,
    }
];


const Todos = () => {
    return (
      <>
        {todos.map((todo) => (
            <Todo todo={todo} />
        ))}
        <TodoForm />
      </>  
    );
};

const Todo = (props) => {
    return (
        <>
            <p>{props.todo.task}</p>
        </>
    );
};

const TodoForm = () => {
    return (
        <form>
            <label htmlFor="newTodo">New Task</label>
            <input 
                type="text"
                name="newTodo"
                id="newTodo"
                title="newTodo"
                placeholder="...new task..."
            />
            <button type="submit">Add task</button>
        </form>
    );
};

export default Todos;