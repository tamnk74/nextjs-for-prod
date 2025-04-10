import { Post } from '@/entities/post/model';
import { supabase } from '../utils/supabase';

export const fetchPosts = async () => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) throw error;
  return data;
};

export const createPost = async (post: Post): Promise<null> => {
  const { data, error } = await supabase.from('posts').insert(post);
  if (error) throw error;
  return data;
};

export const updatePost = async (post: Post) => {
  const { error } = await supabase.from('posts').update(post).eq('id', post.id);

  if (error) throw error;
};

export const deletePost = async (postId: number): Promise<void> => {
  const { error } = await supabase.from('posts').delete().eq('id', postId);

  if (error) throw error;
};
