// components/PostCard.tsx

import React from 'react';

interface PostCardProps {
  title: string;
  content: string;
  author: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, author }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-gray-500 text-sm">By {author}</p>
    </div>
  );
};

export default PostCard;
