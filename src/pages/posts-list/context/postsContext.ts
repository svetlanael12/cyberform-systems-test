import { createContext } from 'react';
import { PostsModel } from '../model/mobx/postsModel/index.ts';

export const PostsContext = createContext({} as PostsModel);
