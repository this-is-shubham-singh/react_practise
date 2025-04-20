import { configureStore } from "@reduxjs/toolkit";
import ToDoSlicer from "../features/TodoSlicer";

export const store = configureStore({
  reducer: {
    toDo: ToDoSlicer,
  },
});
