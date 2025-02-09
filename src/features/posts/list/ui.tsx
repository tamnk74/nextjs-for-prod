'use client';

import { Spinner } from '@/shared/ui/spinner';
import { usePosts } from './model';
import { ErrorMessage } from '@/shared/ui/error-message';
import { PostForm } from '../form/ui';
import { Button } from '@/shared/ui/button';
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

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message="Something went wrong!" />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Post Management</h1>

      {/* Post Form for Creating and Editing */}
      <PostForm existingPost={selectedPost} />

      {/* Post List */}
      <ul className="space-y-4 mt-6">
        {posts?.map((post) => (
          <li key={post.id} className="border p-4 rounded-md shadow flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <Button onClick={() => setSelectedPost(post)}>Edit</Button>
            <Button onClick={() => handleDelete(post.id as number)} className=" ml-2 text-white py-2 px-4 rounded-md bg-red-500 hover:bg-red-600">
                Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
