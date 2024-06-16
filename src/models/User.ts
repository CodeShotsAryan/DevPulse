import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
    email: string;
    username: string;
    password: string;
    profilePicture?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    bio?: string;
    createdAt?: Date;
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
    },
    profilePicture: String,
    firstName: String,
    lastName: String,
    bio: String,
    age: {
        type: Number,
        min: [14, "Minimum age of 14 is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const User = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', userSchema);

export default User;
