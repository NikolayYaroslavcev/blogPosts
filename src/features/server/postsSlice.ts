import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPosts} from "../../entities/posts/module/getPosts/getPosts.tsx";
import {FetchPostsResponse, Post} from "../../entities/posts/module/types/types.ts";

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
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<FetchPostsResponse>) => {
                state.posts = action.payload.posts;
                state.totalPosts = action.payload.totalPosts;
                state.loading = false;
            })
            .addCase(getPosts.rejected, (state, action: PayloadAction<string | null>) => {
                state.loading = false;
                state.error = action.payload ?? 'Failed to fetch posts';
            });
    },
});

export default postsSlice.reducer;
