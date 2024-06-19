// components/PostList.tsx

import React from 'react';
import PostCard from './PostCard';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} author={post.author} />
      ))}
    </div>
  );
};

export default PostList;
