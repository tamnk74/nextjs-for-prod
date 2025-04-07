'use client';

import { usePosts } from './model';
import { ErrorMessage } from '@/shared/ui/error/error-message';
import { PostForm } from '../form/ui';
import { Button } from '@/shared/ui/button/button';
import { useState } from 'react';
import { Post } from '@/entities/post/model';
import { useDeletePost } from '../delete/model';

export function PostList() {
  const { data: posts, isLoading, error } = usePosts();
  const deleteMutation = useDeletePost();
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

  const handleDelete = (postId: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      deleteMutation.mutate(postId);
    }
  };

  if (isLoading) return <div className="mx-auto max-w-4xl p-6"><span className="loading loading-dots loading-lg"></span></div>;

  if (error) return <ErrorMessage message="Something went wrong!" />;

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Post Management</h1>
      {/* Post Form for Creating and Editing */}
      <PostForm existingPost={selectedPost} />

      {/* Post List */}
      <ul className="mt-6 space-y-4">
        {posts?.map(post => (
          <li
            key={post.id}
            className="flex items-center justify-between rounded-md border p-4 shadow"
          >
            <div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <Button variant="primary" onClick={() => setSelectedPost(post)}>
              Edit
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleDelete(post.id as number)}
              className="ml-2"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
