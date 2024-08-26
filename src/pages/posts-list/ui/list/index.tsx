import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../api';
import { ConditionalContent } from '../../../../components/conditional-content';
import { Title } from '../../../../components/title';
import { PaginationPostsContainer } from '../pagination-posts-container';
import { PostsDTO } from '../../../../types';
import { AxiosError } from 'axios';
import { SearchInputPosts } from '../search-input-posts';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { usePostsContext } from '../../model/hooks/index..ts';

export const List = observer((): JSX.Element => {
    const { data, isLoading, error } = useQuery<PostsDTO, AxiosError>({
        queryKey: ['posts'],
        queryFn: getPosts,
    });

    const { posts, setPosts, setCurrentPage } = usePostsContext();

    useEffect(() => {
        data && setPosts(data);
    }, [data]);

    const isPosts = posts && posts.length;

    const onSearch = (search?: string) => {
        if (data) {
            const newPostsContextValue = [...data].filter((post) =>
                post.title.toLowerCase().includes(search?.toLowerCase() || '')
            );
            setCurrentPage(1);
            setPosts(newPostsContextValue);
        }
    };

    return (
        <ConditionalContent isLoading={isLoading} error={error}>
            <Title>Список постов</Title>

            {isPosts && (
                <React.Fragment>
                    <SearchInputPosts
                        name="search"
                        placeholder="Поиск по названию"
                        onSearch={onSearch}
                    />
                    <PaginationPostsContainer />
                </React.Fragment>
            )}
        </ConditionalContent>
    );
});
