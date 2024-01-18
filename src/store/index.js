import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../reducer";

const store = configureStore({
    reducer: todosSlice
})

export default store;