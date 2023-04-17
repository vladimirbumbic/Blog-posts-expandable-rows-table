import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getUsers, User } from "../../data/data";
import { RootState } from "../store";

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUser",
  async () => getUsers(),
);

export interface UserState {
  userList: User[];
}

const initialState = {
  userList: [],
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUserSuccess: (state, action: PayloadAction<number>) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload,
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.userList.push(...payload);
    });
  },
});

export const { deleteUserSuccess } = userSlice.actions;
export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.user.userList;
