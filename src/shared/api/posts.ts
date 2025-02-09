import { Post } from '@/entities/post/model';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPost = async (post: Post): Promise<Post> => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await axios.put(`${API_URL}/${post.id}`, post);
  return response.data;
};

export const deletePost = async (postId: number): Promise<void> => {
  await axios.delete(`${API_URL}/${postId}`);
};
