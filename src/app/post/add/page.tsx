'use client';

import PostForm from '@/components/post/PostForm';

export default function AddPostPage() {
  return (
    <main className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>New Post</h1>
      <PostForm />
    </main>
  );
}
