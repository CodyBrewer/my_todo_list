import React from 'react';
import Todos from '../../features/todos';
import "./List.css"

const List = () => {
    return (
        <>
            <h1 className="Title">My Todo List</h1>
            <Todos />
        </>
    )
};

export default List;