import connectDB from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/Post";
import User from "@/models/User";

const getQueryParams = (url: string) => {
    const params = new URL(url).searchParams;
    return Object.fromEntries(params.entries());
  };

export async function POST(req: NextRequest) {
    await connectDB();
    try {
      const { postTitle, postContent, author } = await req.json();
      if (!postTitle || !postContent || !author) {
        return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
      }
  
      const user = await User.findById(author);
      if (!user) {
        return NextResponse.json({ success: false, message: 'Author not found' }, { status: 404 });
      }
  
      const newPost = new Post({ postTitle, postContent, author });
      await newPost.save();
      return NextResponse.json({ success: true, data: newPost }, { status: 201 });

    } catch (error) {
      console.error('Error creating post:', error);
      return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
  }
  
  export async function GET(req: NextRequest) {
    await connectDB();
    try {
      const { postId } = getQueryParams(req.url);
  
      if (postId) {
        const post = await Post.findById(postId);
        if (!post) {
          return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: post });
      } else {
        const posts = await Post.find({});
        return NextResponse.json({ success: true, data: posts });
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
  }

  export async function PUT(req : NextRequest){
         await connectDB()
         
         try {
                const {postId} = await getQueryParams(req.url);
                const {postTitle , postContent} = await req.json();

                if(!postId){
                    return NextResponse.json({
                        sucess : false ,
                        message:"Post ID is required " 
                    },{status : 404})
                }
                
                const post = await Post.findById(postId)
                if(postId){
                    if(!post){
                        return NextResponse.json({
                            success : false ,
                            message : "Post Not found "
                        },{status : 404})
                    }
                }

                if(postTitle) {post.postTitle  = postTitle}
                if(postContent){ post.postContent = postContent}

                await post.save()
                return NextResponse.json({ success: true, data: post });


         } catch (error) {
            console.error('Error updating post:', error);
            return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
         }
  }

  export async function DELETE(req : NextRequest){
    await connectDB()
    
    try {
           const {postId} = await getQueryParams(req.url);
         
           if(!postId){
               return NextResponse.json({
                   sucess : false ,
                   message:"Post ID is required " 
               },{status : 404})
           }

           const deletedPost = await Post.findByIdAndDelete(postId)
           
           if(!deletedPost){
              
                   return NextResponse.json({
                       success : false ,
                       message : "Post Not found "
                   },{status : 404})
           }
           
           return NextResponse.json({
            success: true,
            message: "Post deleted successfully.",
        }, { status: 200 });;


    } catch (error) {
       console.error('Error Deleting post:', error);
       return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}