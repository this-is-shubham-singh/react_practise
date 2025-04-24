import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "appData",
  initialState: {
    profile: {
      name: "",
      age: "",
      email: "",
    },
    interest: {
      frontend: false,
      backend: false,
      fullstack: false,
      favSport: "",
    },
  },
  reducers: {
    addProfileDetails: (state, action) => {
      state.profile.name = action.payload.name;
      state.profile.age = action.payload.age;
      state.profile.email = action.payload.email;
    },
    addInterestDetails: (state, action) => {
      state.interest.frontend = action.payload.front;
      state.interest.backend = action.payload.backend;
      state.interest.fullstack = action.payload.fullstack;
      state.interest.favSport = action.payload.favSport;
    },
  },
});

export const { addProfileDetails, addInterestDetails } = DataSlice.actions;

export default DataSlice.reducer;
