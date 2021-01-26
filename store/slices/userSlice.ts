import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    error: null,
  },
  reducers: {
    loadUsersSuccess(state, action) {
      state.users = action.payload;
    },
    loadUsers(state) {
      state.error = null
      state.users = []
    }
  },
});

export const selectUsers = (state: any) => state.user.users
export const selectError = (state: any) => state.user.error

export const { loadUsersSuccess, loadUsers } = userSlice.actions;

export default userSlice.reducer;
