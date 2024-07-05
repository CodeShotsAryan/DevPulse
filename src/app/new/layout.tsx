"use client"
import CreatePostForm from "@/components/Posts/CreatePostForm";
import CreatePostHeader from "@/components/Posts/CreatePostHeader";

export const SidebarLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const SubmitForm =()=>{
        console.log("Form created")
    }
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-zinc-300 relative">
      <CreatePostHeader />
      <CreatePostForm onSubmit={SubmitForm}/>
      {children}
    </div>
  );
};

export default SidebarLayout;
