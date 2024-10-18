import { createSlice } from '@reduxjs/toolkit';
import {getPosts} from "../../entities/posts/module/getPosts/getPosts.tsx";



interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostsState {
    posts: Post[];
    totalPosts: number;
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    totalPosts: 0,
    loading: false,
    error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload.posts;
                state.totalPosts = action.payload.totalPosts;
                state.loading = false;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default postsSlice.reducer;
