import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getMembers, BlogPost } from "../../data/data";
import { RootState } from "../store";

export const fetchPosts = createAsyncThunk<BlogPost[]>(
  "users/fetchPosts",
  async () => getMembers(),
);

export interface PostState {
  postList: BlogPost[];
}

const initialState = {
  postList: [],
} as PostState;

export const userSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostSuccess: (state, action: PayloadAction<BlogPost>) => {
      state.postList.push(action.payload);
    },
    editBlogPostSuccess: (state, action: PayloadAction<BlogPost>) => {
      const { id, ...data } = action.payload;
      state.postList = state.postList.map((post) =>
        post.id === id ? { id, ...data } : post,
      );
    },
    deleteBlogPostSuccess: (state, action: PayloadAction<string>) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload,
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.postList.push(...payload);
    });
  },
});

export const { deleteBlogPostSuccess, addPostSuccess, editBlogPostSuccess } =
  userSlice.actions;

export default userSlice.reducer;

export const selectPosts = (state: RootState) => state.post.postList;
