import mongoose , {Schema , Document , Model } from 'mongoose'

export interface Comment extends Document {
    messageContent : string ;
    author : mongoose.Types.ObjectId ;
    post : mongoose.Types.ObjectId ;
    createdAt : Date ;
}

const commentSchema : Schema <Comment> =new Schema({
    messageContent : {
        type : String ,
        required : [true , "Content is required ! "]
    } ,
   createdAt : {
    type : Date ,
    default : Date.now(),
    required : true 
   },
   post :{
    type : mongoose.Schema.Types.ObjectId ,
    ref : 'Post',
    required : true 
   },
   author :{
    type : mongoose.Schema.Types.ObjectId ,
    required : true ,
    ref : 'User'
   }

})

const Comment = mongoose.models.Comment as mongoose.Model<Comment> || mongoose.model<Comment>("Comment", commentSchema)

export default Comment ;