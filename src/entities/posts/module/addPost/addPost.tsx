import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const addPost = createAsyncThunk(
    'posts/addPost',
    async ({title, body}: { title: string; body: string }) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
            userId: '1',
        });
        return response.data;
    }
);
