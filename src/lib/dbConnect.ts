import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ;
const connectDB = async()=> {

    const connectionState = mongoose.connection.readyState;


    if (connectionState === 1) {
        console.log("Already connected to database");
        return;
    }

    if (connectionState === 2) {
        console.log(" connectingg.. to database");
        return;
    }

    try {
        mongoose.connect(MONGODB_URI! , {
            dbName: "DevPulse" ,
        });
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw new Error("Error Connecting to Database ")
        process.exit(1); 

    }
}

export default connectDB;
