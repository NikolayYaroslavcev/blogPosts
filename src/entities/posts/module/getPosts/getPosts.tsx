import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {FetchPostsResponse, Post} from '../../../../entities/posts/module/types/types.ts';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export const getPosts = createAsyncThunk<FetchPostsResponse, number>(
    'posts/fetchPosts',
    async (page, thunkAPI) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/posts?_limit=10&_page=${page}`);
            const totalPosts = parseInt(response.headers['x-total-count'], 10);
            const posts = response.data;

            const authorsResponse = await Promise.all(
                posts.map((post: Post) =>
                    axios.get(`${API_BASE_URL}/users/${post.userId}`)
                )
            );

            const authorsMap = authorsResponse.reduce((acc, authorResponse) => {
                const author = authorResponse.data;
                acc[author.id] = author.name;
                return acc;
            }, {} as Record<number, string>);

            const postsWithImagesAndAuthors = posts.map((post: Post) => {
                const imageUrl = `${IMAGE_BASE_URL}${post.id}/1500/1500.jpg`;
                return {
                    ...post,
                    imageUrl,
                    authorName: authorsMap[post.userId]
                };
            });

            return {
                posts: postsWithImagesAndAuthors,
                totalPosts,
            };
        } catch (error) {
            console.error('Error fetching posts:', error);
            return thunkAPI.rejectWithValue('Failed to fetch posts');
        }
    }
);
