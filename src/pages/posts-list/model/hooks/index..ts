import { useContext } from 'react';
import { PostsContext } from '../../context/postsContext';
import { PostsModel } from '../mobx/postsModel/index.ts';

export const usePostsContext = (): PostsModel => {
    return useContext<PostsModel>(PostsContext);
};
