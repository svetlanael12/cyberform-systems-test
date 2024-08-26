import styled from 'styled-components';

export const GridComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
