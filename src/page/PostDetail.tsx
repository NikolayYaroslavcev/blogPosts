import { useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import styles from '../styles/PostDetail.module.scss';
import {useAppDispatch} from "../common/hook/UseDispatch.ts";
import {getPostById} from "../entities/posts/module/getPostById/getPostById.tsx";
import {useAppSelector} from "../common/hook/UseSelector.ts";
import {Preloader} from "../components/Preloader.tsx";

export const PostDetail = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { post, author, loading, error } = useAppSelector(state => state.postDetail);

    useEffect(() => {
        if (id) {
            dispatch(getPostById(id));
        }
    }, [dispatch, id]);

    const handleBack = () => {
        navigate(-1);
    };

    if (loading) return <Preloader/>;
    if (error) return <div>Error: {error}</div>;

    if (!post || !author) return null;

    return (
        <div className={styles.postDetail}>
            <button className={styles.backButton} onClick={handleBack}>Back</button>
            <img src={`https://picsum.photos/1500/1500.jpg`} alt="Post" />
            <h1>{post.title}</h1>
            <p>Author: {author.name}</p>
            <p>{post.body}</p>
        </div>
    );
};
