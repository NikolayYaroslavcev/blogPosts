import {useEffect, useState} from 'react';
import {useAppDispatch} from "../../common/hook/UseDispatch.ts";
import {useAppSelector} from "../../common/hook/UseSelector.ts";
import {getPosts} from "../../entities/posts/module/getPosts/getPosts.tsx";
import {ModalWrap} from "../../components/modal/ModalWrap.tsx";
import {PostList} from "../../components/postLIst/PostList.tsx";






export const Home = () => {
    const dispatch = useAppDispatch();
    const {totalPosts, loading, error, posts} = useAppSelector(state => state.posts);

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getPosts(page));
    }, [dispatch, page]);

    const handleNextPage = () => {
        if (page < Math.ceil(totalPosts / 10)) setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    return (
        <div>
            <ModalWrap/>
            <PostList
                posts={posts}
                loading={loading}
                error={error}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
                page={page}
                totalPosts={totalPosts}
            />
        </div>
    );
};
