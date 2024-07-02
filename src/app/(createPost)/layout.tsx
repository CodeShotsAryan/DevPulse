// components/CreatePostLayout.tsx

import React from "react";
import Header from "@/components/Header/Header";

const CreatePostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default CreatePostLayout;
