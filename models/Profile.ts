import mongoose,{Schema , Document } from 'mongoose'

interface Profile extends Document {
    userId :mongoose.Types.ObjectId ;
    profilePicture?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    bio?: string;

}

const profileSchema : Schema <Profile> = new Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User',
        required : true 
    },
    profilePicture: String,
    firstName: String,
    lastName: String,
    age: Number,
    bio: String,
})


const Profile = mongoose.models.Profile as mongoose.Model<Profile> || mongoose.model<Profile>('Profile', profileSchema);

export default Profile  