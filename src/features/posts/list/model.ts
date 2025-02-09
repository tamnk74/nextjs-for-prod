import { useQuery } from '@tanstack/react-query';
import { Post } from '@/entities/post/model';
import { fetchPosts } from '@/shared/api/posts';

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};