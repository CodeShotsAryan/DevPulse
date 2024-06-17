import mongoose, { Document, Schema, model } from 'mongoose';

export interface Post extends Document {
    postTitle: string;
    postContent: string;
    author: mongoose.Types.ObjectId;
    createdAt: Date;
}

const postSchema: Schema<Post> = new Schema({
    postTitle: {
        type: String,
        required: [true, "Post Title is required!"]
    },
    postContent: {
        type: String,
        required: [true, "Post Content is required"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Author name is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: [true, "Creation Date is required"]
    }
});

// Check if the model already exists before defining it
const Post = mongoose.models.Post || mongoose.model<Post>('Post', postSchema);

export default Post;
