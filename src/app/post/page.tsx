import { PostList } from '@/components/post/PostList';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Post',
  description: 'journey to Net Zero',
};

export default function PostPage() {
  return (
    <main className='p-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Post</h1>
        <Link href='/post/add'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            등록
          </button>
        </Link>
      </div>
      <PostList />
    </main>
  );
}
