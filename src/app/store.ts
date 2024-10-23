import { configureStore,combineReducers } from '@reduxjs/toolkit';
import postsReducer from '../features/server/postsSlice.ts';
import postDetailReducer from '../features/server/postSlice.ts';
import addPostReducer from '../features/server/addPostSlice.ts';



const rootReducer = combineReducers({
    posts: postsReducer,
    postDetail: postDetailReducer,
    addPost: addPostReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
