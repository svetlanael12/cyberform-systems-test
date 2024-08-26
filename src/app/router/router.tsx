import { Navigate } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { ClientRouters } from '../../types';
import { PostsListPage } from '../../pages/posts-list';
import { PostPage } from '../../pages/post';
import { NotFoundPage } from '../../pages/not-found';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Navigate to={ClientRouters.projects} replace />,
        },
        {
            element: <PostsListPage />,
            path: ClientRouters.projects,
        },
        {
            element: <PostPage />,
            path: ClientRouters.project,
        },
        {
            element: <NotFoundPage />,
            path: '*',
        },
    ],
    { basename: 'https://cyberform-systems-test.netlify.app' }
);
