import React from 'react';
import { StyledLink } from '../../../components/link';
import { ClientRouters } from '../../../types';

export const NotFound = (): JSX.Element => {
    return (
        <React.Fragment>
            <p>Страница не найдена</p>
            <StyledLink to={ClientRouters.projects} color="#090974">
                Вернуться на страницу постов
            </StyledLink>
        </React.Fragment>
    );
};
