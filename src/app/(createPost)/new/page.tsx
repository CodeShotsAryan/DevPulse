"use client"
import CreatePostForm from "@/components/Posts/CreatePostForm";
import CreatePostLayout from "../layout"
import PostList from "@/components/Posts/PostList";

export default function Page(){
    const handleCreatePost = () => {
        console.log("Post created");
        
      }
    return(
        <CreatePostLayout >
            

            <CreatePostForm onSubmit={handleCreatePost}/>
        </CreatePostLayout>
    )
}