import { configureStore } from "@reduxjs/toolkit";
import todos from "../reducer/todosSlice";

const store = configureStore({
    reducer: { todos },
})

export default store;