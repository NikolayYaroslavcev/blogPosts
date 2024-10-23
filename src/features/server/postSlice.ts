import { createSlice } from '@reduxjs/toolkit';
import { getPostById } from '../../entities/posts/module/getPostById/getPostById.tsx';
interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface User {
    id: number;
    name: string;
}

interface PostState {
    post: Post | null;
    author: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: PostState = {
    post: null,
    author: null,
    loading: false,
    error: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPostById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.post = action.payload.post;
                state.author = action.payload.author;
                state.loading = false;
            })
            .addCase(getPostById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default postSlice.reducer;
