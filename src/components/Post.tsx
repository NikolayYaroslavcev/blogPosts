import { Link } from 'react-router-dom';
import styles from '../styles/PostList.module.scss';
import { Post } from "../entities/posts/module/types/types.ts";
import { Preloader } from "../components/Preloader.tsx";
import 'animate.css';

interface PostListProps {
    posts: Post[];
    loading: boolean;
    error: string | null;
    onNextPage: () => void;
    onPrevPage: () => void;
    page: number;
    totalPosts: number;
}

export const PostList = ({
                             posts,
                             loading,
                             error,
                             onNextPage,
                             onPrevPage,
                             page,
                             totalPosts,
                         }: PostListProps) => {

    if (loading) return <Preloader />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Blog Posts</h1>
            <div className={styles.postList}>
                {posts.map((post, index) => (
                    <div
                        key={post.id}
                        className={`animate__animated animate__fadeInUp ${styles.postItem}`}
                        style={{ animationDelay: `${index * 0.1}s` }} // Slight delay for each item
                    >
                        <img src={`https://picsum.photos/1500/1500.jpg`} alt="Random" />
                        <div className={styles.postContent}>
                            <h2>{post.title}</h2>
                            <p>Author: {post.userId}</p>
                        </div>
                        <Link to={`/posts/${post.id}`} className={styles.readMoreButton}>Read more</Link>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                <button onClick={onPrevPage} disabled={page === 1}>Previous</button>
                <button onClick={onNextPage} disabled={page >= Math.ceil(totalPosts / 10)}>Next</button>
            </div>
        </div>
    );
};
