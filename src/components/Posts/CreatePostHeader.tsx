"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const PostFormHeader: React.FC = () => {
  const { data: session, status } = useSession();


  return (
    <nav className="navbar bg-black text-white px-4 py-2 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Link href="/" passHref>
         DevPulse
        </Link>
       
      </div>

      <div className="flex space-x-4">
        <h1 className=" font-bold ">Create Post</h1>
      </div>

    
      
        <div className="flex items-center space-x-4">
          <p className=" font-medium"> {session?.user?.name || "User"}</p>
        
        </div>
    
    </nav>
  );
};

export default PostFormHeader;
