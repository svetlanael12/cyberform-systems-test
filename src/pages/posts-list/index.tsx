import { useMemo } from 'react';
import { List } from './ui/list';
import { observer } from 'mobx-react-lite';
import { PostsModel } from './model/mobx/postsModel/index.ts';
import { PostsContext } from './context/postsContext';

export const PostsListPage = observer((): JSX.Element => {
    const postsModel = useMemo(() => new PostsModel(), []);

    return (
        <PostsContext.Provider value={postsModel}>
            <List />
        </PostsContext.Provider>
    );
});
