'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePost, useUpdatePost } from './model';
import { Post } from '@/entities/post/model';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import dynamic from 'next/dynamic';

const EditorInput = dynamic(() => import('@/shared/ui/editor-input'), { ssr: false });

export function PostForm({ existingPost }: { existingPost?: Post }) {
  const { register, handleSubmit, reset, setValue } = useForm<Post>({
    defaultValues: existingPost || { title: '', body: '' },
  });

  const [isEditing, setIsEditing] = useState(!!existingPost);
  const createMutation = useCreatePost();
  const updateMutation = useUpdatePost();

  const onSubmit = async (data: Post) => {
    if (isEditing) {
      updateMutation.mutate({
        ...data,
        slug: data.title.toLowerCase().replace(/\s+/g, '-'),
        user_id: 1,
      });
    } else {
      createMutation.mutate({
        ...data,
        slug: data.title.toLowerCase().replace(/\s+/g, '-'),
        user_id: 1,
      });
    }
    reset({});
    setIsEditing(false);
  };

  useEffect(() => {
    if (existingPost) {
      setIsEditing(true);
      reset(existingPost);
    }
  }, [existingPost, reset]);

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-4 rounded-md shadow">
        <label className="label-text" htmlFor="labelAndHelperText">Title</label>
        <Input {...register('title', { required: true })} placeholder="Title" className='w-96'/>
        <label className="label-text" htmlFor="labelAndHelperText">Content</label>
        <EditorInput 
          onChange={(data) => setValue('body', JSON.stringify(data))}
          defaultValue={existingPost?.body ? JSON.parse(existingPost.body) : { blocks: [] }}
        />
        <Button type="submit">{isEditing ? 'Update Post' : 'Create Post'}</Button>
        <Button type="reset" className='btn btn-soft'>Reset</Button>
    </form>
      </div>
  
  );
}
