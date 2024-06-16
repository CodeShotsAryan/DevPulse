import mongoose ,{Document , Schema ,model } from 'mongoose'

export interface Post extends Document{
    postTitle : string ;
    postContent : string ;
    author : mongoose.Types.ObjectId
    // postSlug : string;
    createdAt : Date;
}

const postModel  : Schema<Post>= new Schema({

    postTitle :{
        type:String ,
        required : [true , "Post Title is required ! "]
    },
    postContent : {
        type : String ,
        required : [true , "Post Content is required "]
    },
    author :{
        type : mongoose.Schema.ObjectId ,
        required : [true , "author name is required "]
    } ,

    createdAt : {
        type : Date,
        default: Date.now(),
        required : [true , "Creation Date is required "]
    }

})

const Post = mongoose.models.postModel as mongoose.Model<Post>  || mongoose.model<Post>('Post', postModel)

export default Post ; 