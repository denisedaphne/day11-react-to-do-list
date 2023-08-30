import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../components/ToDoReducer";

export const store = configureStore({
    reducer: {
      todo: todoSlice
    }
});