import { createSlice } from "@reduxjs/toolkit";

const ToDoSlicer = createSlice({
  name: "toDo",
  initialState: { value: [] },
  reducers: {
    addToDo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteToDo: (state, action) => {
      state.value = state.value.filter((val, index) => {
        return index != action.payload;
      });
    },
  },
});

export const { addToDo, deleteToDo } = ToDoSlicer.actions;
export default ToDoSlicer.reducer;
