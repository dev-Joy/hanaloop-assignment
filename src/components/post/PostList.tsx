'use client';

import React from 'react';

import { PostCard } from './PostCard';
import { usePosts } from '@/hooks/use-posts';
import { Post } from '@/types/post';
import Link from 'next/link';

export function PostList() {
  const { data, error, isLoading } = usePosts();

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>에러가 발생했습니다: {error.message}</p>;
  }

  return (
    <section>
      <ul>
        {data?.map((post: Post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
