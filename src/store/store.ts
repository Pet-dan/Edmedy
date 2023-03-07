import { configureStore } from "@reduxjs/toolkit";
import { addStaffReducer } from "./slices/post/addStaffMemberSlice";

// the post slice folder is for making post delete and put request to the server and handling states for inputs

// the get slice is for handling data fetching and overall user and data management

export const store = configureStore({
  reducer: {
    addStaff: addStaffReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;
