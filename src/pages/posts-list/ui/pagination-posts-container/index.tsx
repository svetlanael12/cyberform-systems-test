import React, { useState } from 'react';
import styled from 'styled-components';
import { usePostsContext } from '../../model/hooks/index.';
import { GridComponent } from '../../../../components/grid-component';
import { PostCard } from '../post-card';
import { observer } from 'mobx-react-lite';

const Pagination = styled.div`
    margin-top: 20px;
    button {
        margin: 5px 5px;
        padding: 10px 15px;
        cursor: pointer;

        border: none;
        border-radius: 50%;
        background-color: #330570;
        color: #ffffff;

        &.selected {
            outline: 2px solid #330570;
            outline-offset: 5px;
        }
    }
`;

export const PaginationPostsContainer = observer((): JSX.Element => {
    const [postsPerPage] = useState(10);
    const { posts, currentPage, setCurrentPage } = usePostsContext();

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts =
        posts && posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const renderCards = currentPosts.map((post, index) => (
        <PostCard key={index} post={post} />
    ));

    const pagination = [...Array(totalPages)].map((_, ind) => {
        const index = ind + 1;
        return (
            <button
                key={index}
                onClick={() => paginate(index)}
                className={currentPage === index ? 'selected' : ''}
            >
                {index}
            </button>
        );
    });

    return (
        <React.Fragment>
            <GridComponent>{renderCards}</GridComponent>

            <Pagination>{pagination}</Pagination>
        </React.Fragment>
    );
});
