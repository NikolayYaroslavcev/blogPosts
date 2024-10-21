import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface AddPostArgs {
    title: string;
    body: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number | string;
}

export const addPost = createAsyncThunk<Post, AddPostArgs>(
    'posts/addPost',
    async ({ title, body }) => {
        const response = await axios.post(`${API_BASE_URL}/posts`, {
            title,
            body,
            userId: '1',
        });
        return response.data;
    }
);
