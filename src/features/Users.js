import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updataUserName: (state, action) => {
      console.log(action.payload);
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updataUserName } = userSlice.actions;
export default userSlice.reducer;
