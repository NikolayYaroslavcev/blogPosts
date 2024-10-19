import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import 'animate.css';
import {useAppDispatch} from "../../common/hook/UseDispatch.ts";
import {useAppSelector} from "../../common/hook/UseSelector.ts";
import {getPostById} from "../../entities/posts/module/getPostById/getPostById.tsx";
import {Preloader} from "../../components/preloader/Preloader.tsx";
import styles from "../../page/postDetail/PostDetail.module.scss";


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

    if (loading) return <Preloader />;
    if (error) return <div>Error: {error}</div>;
    if (!post || !author) return null;

    return (
        <div className={`${styles.postDetail} animate__animated animate__fadeIn`}>
            <button className={styles.backButton} onClick={handleBack}>Back</button>
            <img
                src={`https://picsum.photos/1500/1500.jpg`}
                alt="Post"
                className="animate__animated animate__zoomIn"
            />
            <h1 className="animate__animated animate__fadeInDown">{post.title}</h1>
            <p className="animate__animated animate__fadeIn">{`Author: ${author.name}`}</p>
            <p className="animate__animated animate__fadeIn">{post.body}</p>
        </div>
    );
};
