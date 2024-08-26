import { ClientRouters, PostDTO } from '../../../../types';
import styled from 'styled-components';
import { generatePath } from 'react-router-dom';
import { StyledLink } from '../../../../components/link';

const Card = styled.div`
    height: 100%;
    background: #090974;
    padding: 20px;
    text-decoration: none;

    color: #ffffff;

    border-radius: 10px;
`;

export type PostCardProps = {
    post: PostDTO;
};

export const PostCard = (props: PostCardProps): JSX.Element => {
    const { post } = props;

    const postLink = generatePath(ClientRouters.project, {
        id: String(post.id),
    });

    return (
        <StyledLink to={postLink}>
            <Card>
                <h2>{post.title}</h2>

                <div>
                    <span>User ID: {post.userId}</span>
                </div>
            </Card>
        </StyledLink>
    );
};
