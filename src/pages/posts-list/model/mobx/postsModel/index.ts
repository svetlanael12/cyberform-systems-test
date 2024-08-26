import { action, makeObservable, observable } from 'mobx';
import { PostsDTO } from '../../../../../types';

export const postsModelObservable = {
    posts: observable,
    currentPage: observable,

    setPosts: action.bound,
    setCurrentPage: action.bound,
};

export class PostsModel {
    posts: PostsDTO = [];
    currentPage = 1;

    constructor() {
        makeObservable(this, postsModelObservable);
    }

    setPosts(posts: PostsDTO): void {
        this.posts = posts;
    }

    setCurrentPage(currentPage: number): void {
        this.currentPage = currentPage;
    }
}
