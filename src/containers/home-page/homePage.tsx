"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import { BentoGridThirdDemo } from "@/components/bento-grid";
import { useMediaQuery } from 'usehooks-ts';
import CreatePostForm from "@/components/Posts/CreatePostForm";
import PostList from "@/components/Posts/PostList";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 640px)');

  const [posts , setPosts] =  useState<Post[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }
  const handleCreatePost = (newPost: Omit<Post, 'id'>) => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    setPosts([...posts, { id, ...newPost }]);
  }
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex flex-1">
        {isDesktop && (
          <div className="w-[270px]">
            <SideBar />
          </div>
        )}
        <div className={`flex-1 p-4 ${isDesktop ? '' : 'w-full'}`}>
          <CreatePostForm onSubmit={handleCreatePost}/>
          <PostList posts={posts} />
          <BentoGridThirdDemo />
        </div>
      </div>
    </div>
  );
}
