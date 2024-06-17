import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
    email: string;
    username: string;
    password: string;
   
}

const userSchema: Schema<User> = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, "Please use a valid email address"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
   
}, { timestamps: true });

const User = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', userSchema);

export default User;
