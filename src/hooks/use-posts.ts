import { createOrUpdatePost, fetchPosts } from '@/lib/api';
import { Post } from '@/types/post';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  });
}

export function useCreateOrUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: Omit<Post, 'id'> & { id?: string }) =>
      createOrUpdatePost(post),

    onSuccess: (data) => {
      console.log('Post saved successfully:', data);
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },

    onError: (error) => {
      console.error('Failed to save the post:', error);
      alert(`저장에 실패했습니다: ${error.message}`);
    },
  });
}
