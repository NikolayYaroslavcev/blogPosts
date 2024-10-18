import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {FetchPostResponse} from "../../../../entities/posts/module/types/types.ts";


export const getPostById = createAsyncThunk<FetchPostResponse, string>(
    'post/fetchPostById',
    async (postId, thunkAPI) => {
        try {
            const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const post = postResponse.data;
            const authorResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            const author = authorResponse.data;

            return {
                post,
                author
            };
        } catch (error) {
            console.error('Error fetching post:', error);
            return thunkAPI.rejectWithValue('Failed to fetch post');
        }
    }
);
