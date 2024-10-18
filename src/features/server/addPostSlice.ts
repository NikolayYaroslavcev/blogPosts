import { createSlice } from '@reduxjs/toolkit';
import {addPost} from "../../entities/posts/module/addPost/addPost.tsx";



interface Post {
    id: number;
    title: string;
    body: string;
    userId: number | string;
}

// Define initial state
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

// Create the slice
const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    reducers: {
        // Define any additional reducers if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPost.pending, (state) => {
                state.loading = true; // Set loading to true when request is pending
                state.error = null; // Reset any previous error
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.loading = false; // Set loading to false on success
                state.posts.push(action.payload); // Add the new post to the posts array
            })
            .addCase(addPost.rejected, (state, action) => {
                state.loading = false; // Set loading to false on failure
                state.error = action.error.message || 'Failed to add post'; // Capture any error message
            });
    },
});

export default addPostSlice.reducer;
