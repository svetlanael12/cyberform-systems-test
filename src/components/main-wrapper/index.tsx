import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background-color: #7373d9;

    position: relative;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    content: '""';
`;

const BoxContent = styled.div`
    max-width: 1200px;
    padding: 20px;
    width: 100%;
    max-height: 100%;
    min-height: 100vh;
    margin: auto;

    background-color: transparent;
`;

export type MainWrapperProps = {
    children: React.ReactNode;
};

export const MainWrapper = (props: MainWrapperProps): JSX.Element => {
    const { children } = props;

    return (
        <Wrapper>
            <BoxContent>{children}</BoxContent>
        </Wrapper>
    );
};
