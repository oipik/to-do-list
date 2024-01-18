import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todo')) || [],
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, isCompleted: !todo.isCompleted} : todo)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, isEdit: !todo.isEdit} : todo);
        },
        editTask: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? 
                {...todo, task: action.payload.value, isEdit: !todo.isEdit} : todo)
        }
    }
})

export default todosSlice.reducer;
export const {addTodo, deleteTodo, toggleComplete, editTodo, editTask} = todosSlice.actions;

// const editTask = (task, id) => {
//     setTodo(todo.map(todo => (
//         todo.id === id ? { ...todo, task, isEdit: !todo.isEdit } : todo
//     )))
// }


// const addTodo = (task) => {
//     setTodo([...todo, { id: uuidv4(), task, isCompleted: false, isEdit: false }]);
//     localStorage.setItem('todo', JSON.stringify(todo));
// }

// const deleteTodo = (id) => {
//     setTodo(todo.filter(todo => todo.id !== id));
// }

// const toggleComplete = (id) => {
//     setTodo(todo.map(todo => {
//         return (
//             todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
//         )
//     }))
// }

// const editTodo = (id) => {
//     setTodo(todo.map(todo => {
//         return (
//             todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
//         )
//     }))
// }

// const editTask = (task, id) => {
//     setTodo(todo.map(todo => (
//         todo.id === id ? { ...todo, task, isEdit: !todo.isEdit } : todo
//     )))
// }

      // editTask: (state, action) => {
        //     state.todos = state.todos.map(todo => {
        //         if (todo.id === action.payload.id) {
        //             todo.task = action.payload.task;
        //             todo.isEdit = !todo.isEdit;
        //         } 
        // }