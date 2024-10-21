export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    authorName?: string;
    imageUrl?:string;
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
    imageUrl?: string;
}

export interface FetchPostsResponse {
    posts: Post[];
    totalPosts: number;
}
