import Dashboard from '@/components/dashboard/Dashboard';
import { PostList } from '@/components/post/PostList';

export default function Home() {
  return (
    <main className='flex-1 p-6'>
      <Dashboard />
      <PostList />
    </main>
  );
}
