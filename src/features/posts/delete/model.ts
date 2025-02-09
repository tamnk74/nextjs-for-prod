import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '@/shared/api/posts';
import { showErrorToast, showSuccessToast } from '@/shared/lib/toast';

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      showSuccessToast('Post deleted successfully!');
    },
    onError: () => {
      showErrorToast('Failed to delete post.');
    },
  });
};
