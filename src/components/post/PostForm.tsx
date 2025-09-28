'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCreateOrUpdatePost } from '@/hooks/use-posts';
import { Post } from '@/types/post';

export default function PostForm({ post: initialPost }: { post?: Post }) {
  const [post, setPost] = useState<Omit<Post, 'id'> & { id?: string }>(
    initialPost || {
      title: '',
      resourceUid: '',
      dateTime: '',
      content: '',
    }
  );

  const router = useRouter();

  const createOrUpdatePostMutation = useCreateOrUpdatePost();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createOrUpdatePostMutation.mutate(post as Post, {
      onSuccess: () => {
        router.push('/post');
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6 max-w-lg mx-auto'
    >
      {post.id && (
        <input
          type='hidden'
          name='id'
          value={post.id}
        />
      )}
      <div>
        <label
          htmlFor='title'
          className='block text-sm font-medium text-gray-700'
        >
          Title
        </label>
        <input
          id='title'
          name='title'
          value={post.title}
          onChange={handleChange}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          required
        />
      </div>
      <div>
        <label
          htmlFor='resourceUid'
          className='block text-sm font-medium text-gray-700'
        >
          Resource UID
        </label>
        <input
          id='resourceUid'
          name='resourceUid'
          value={post.resourceUid}
          onChange={handleChange}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          required
        />
      </div>
      <div>
        <label
          htmlFor='dateTime'
          className='block text-sm font-medium text-gray-700'
        >
          Date/Time (YYYY-MM)
        </label>
        <input
          id='dateTime'
          name='dateTime'
          value={post.dateTime}
          onChange={handleChange}
          placeholder='YYYY-MM'
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          required
        />
      </div>
      <div>
        <label
          htmlFor='content'
          className='block text-sm font-medium text-gray-700'
        >
          Content
        </label>
        <textarea
          id='content'
          name='content'
          value={post.content}
          onChange={handleChange}
          rows={5}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Write your post content here...'
          required
        />
      </div>
      <div>
        <button
          type='submit'
          disabled={createOrUpdatePostMutation.isPending}
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {createOrUpdatePostMutation.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
