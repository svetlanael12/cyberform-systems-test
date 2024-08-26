import axios from "axios";
import { PostsDTO } from "../../../types";

export const getPosts = async (): Promise<PostsDTO> => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
};
