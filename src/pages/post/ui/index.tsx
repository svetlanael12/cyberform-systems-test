import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../api/postApi';
import { ClientRouters, PostDTO } from '../../../types';
import { ConditionalContent } from '../../../components/conditional-content';
import { Title } from '../../../components/title';
import { StyledLink } from '../../../components/link';
import { AxiosError } from 'axios';

export const Post = (): JSX.Element => {
    const { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        navigate(ClientRouters.notFound);
        return <React.Fragment />;
    }

    const { data, isLoading, error } = useQuery<PostDTO, AxiosError>({
        queryKey: ['post'],
        queryFn: () => getPostById(id),
    });

    return (
        <ConditionalContent error={error} isLoading={isLoading}>
            {data && (
                <React.Fragment>
                    <Title>{data.title}</Title>

                    <p>{data.body}</p>
                </React.Fragment>
            )}

            <StyledLink to={ClientRouters.projects} color="#090974">
                Вернуться на страницу постов
            </StyledLink>
        </ConditionalContent>
    );
};
