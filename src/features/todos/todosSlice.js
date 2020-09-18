import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push({
                id: state.tasks.length + 1,
                task: action.payload,
                completed: false,
            });
        },
        toggleCompleted: (state, action) => {
            console.log(action.payload);
            state.tasks.forEach((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                };
            });
        },
    }
});

export const { addTodo, toggleCompleted } = todoSlice.actions;

export const selectTasks = state => state.todos.tasks;

export default todoSlice.reducer;