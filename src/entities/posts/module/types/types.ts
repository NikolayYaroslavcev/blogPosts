export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}


export interface User {
    id: number;
    name: string;
}

export interface FetchPostResponse {
    post: Post;
    author: User;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface FetchPostsResponse {
    posts: Post[];
    totalPosts: number;
}
