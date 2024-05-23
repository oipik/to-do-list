import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const json = JSON.parse(localStorage.getItem('todo'));
const state = json !== null ? json : [];

const todoAdapter = createEntityAdapter();
const initial = todoAdapter.getInitialState();
const initialState = todoAdapter.upsertMany(initial, state);

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo:  todoAdapter.addOne,
        deleteTodo: todoAdapter.removeOne,
        toggleComplete: todoAdapter.upsertOne,
        editTodo: todoAdapter.upsertOne,
        editTask: todoAdapter.upsertOne
    }
})

export const { selectAll } = todoAdapter.getSelectors(state => state.todos);

export default todosSlice.reducer;
export const { addTodo, deleteTodo, toggleComplete, editTodo, editTask } = todosSlice.actions;