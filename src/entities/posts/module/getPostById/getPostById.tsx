import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchPostResponse } from "../../../../entities/posts/module/types/types.ts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getPostById = createAsyncThunk<FetchPostResponse, string>(
    'post/fetchPostById',
    async (postId, thunkAPI) => {
        try {
            const [postResponse, authorResponse] = await Promise.all([
                axios.get(`${API_BASE_URL}/posts/${postId}`),
                axios.get(`${API_BASE_URL}/users/${postId}`)
            ]);

            const post = postResponse.data;
            const author = authorResponse.data;

            return { post, author };
        } catch (error) {
            console.error('Error fetching post:', error);
            return thunkAPI.rejectWithValue('Failed to fetch post');
        }
    }
);
