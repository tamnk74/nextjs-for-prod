'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePost, useUpdatePost } from './model';
import { Post } from '@/entities/post/model';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';

export function PostForm({ existingPost }: { existingPost?: Post }) {
  const { register, handleSubmit, reset } = useForm<Post>({
    defaultValues: existingPost || { title: '', body: '' },
  });

  const [isEditing, setIsEditing] = useState(!!existingPost);
  const createMutation = useCreatePost();
  const updateMutation = useUpdatePost();

  const onSubmit = (data: Post) => {
    if (isEditing) {
      updateMutation.mutate(data);
    } else {
      createMutation.mutate(data);
    }
    reset({});
    setIsEditing(false);
  };

  useEffect(() => {
    if (existingPost) {
      setIsEditing(true);
      reset(existingPost);
    }
  }, [existingPost]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-4 rounded-md shadow">
      <Input {...register('title', { required: true })} placeholder="Post Title" />
      <Input {...register('body', { required: true })} placeholder="Post Body" />
      <Button type="submit">{isEditing ? 'Update Post' : 'Create Post'}</Button>
    </form>
  );
}
