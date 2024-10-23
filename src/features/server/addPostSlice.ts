import { createSlice } from '@reduxjs/toolkit';
import { addPost } from "../../entities/posts/module/addPost/addPost.tsx";
import {Post} from "../../entities/posts/module/types/types.ts";

interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
};

const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts.push(action.payload);
            })
            .addCase(addPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to add post';
            });
    },
});

export default addPostSlice.reducer;
