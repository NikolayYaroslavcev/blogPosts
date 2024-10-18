import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {FetchPostsResponse} from "../../../../entities/posts/module/types/types.ts";


export const getPosts = createAsyncThunk<FetchPostsResponse, number>(
    'posts/fetchPosts',
    async (page, thunkAPI) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
            const totalPosts = parseInt(response.headers['x-total-count'], 10);
            return {
                posts: response.data,
                totalPosts
            };
        } catch (error) {
            console.error('Error fetching posts:', error);
            return thunkAPI.rejectWithValue('Failed to fetch posts');
        }
    }
);
