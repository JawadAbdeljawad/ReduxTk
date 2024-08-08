// src/Components/Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;