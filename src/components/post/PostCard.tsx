import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { id, title, content, dateTime } = post;
  return (
    <div className='my-2 block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md'>
      <h3 className='mb-2 text-lg font-bold text-gray-800'>{title}</h3>
      <p className='truncate text-gray-700'>{content}</p>
      <small className='mt-4 block text-sm text-gray-500'>
        ID: {id} | Date: {dateTime}
      </small>
    </div>
  );
}
