import axios from 'axios';
import { PostDTO } from '../../../types';

export const getPostById = async (id: string): Promise<PostDTO> => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.data);
};
