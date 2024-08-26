import { AxiosError } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientRouters } from '../../types';

export type ConditionalContentProps = {
    isLoading?: boolean;
    error: AxiosError | null;

    children: React.ReactNode;
};

export const ConditionalContent = (
    props: ConditionalContentProps
): JSX.Element => {
    const { isLoading, error, children } = props;
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        if (error.response?.status === 404) {
            navigate(ClientRouters.notFound);
            return <React.Fragment />;
        }

        return <div>Произошла ошибка: {error.message}</div>;
    }

    return <React.Fragment>{children}</React.Fragment>;
};
