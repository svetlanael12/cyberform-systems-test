import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

export type StyledLinkProps = LinkProps & {
    color?: string;
};

export const StyledLink = styled(Link)<StyledLinkProps>`
    text-decoration: none;
    color: ${({ color }) => (color ? color : 'inherit')};
`;
