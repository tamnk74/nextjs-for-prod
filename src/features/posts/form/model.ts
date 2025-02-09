import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost, updatePost } from '@/shared/api/posts';
import { showErrorToast, showSuccessToast } from '@/shared/lib/toast';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      showSuccessToast('Post created successfully!');
    },
    onError: () => {
      showErrorToast('Failed to create post.');
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      showSuccessToast('Post updated successfully!');
    },
    onError: () => {
      showErrorToast('Failed to update post.');
    },
  });
};
