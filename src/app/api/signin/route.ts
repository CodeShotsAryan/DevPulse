import connectDB from "@/lib/dbConnect";
import bcrypt from 'bcryptjs';
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    await connectDB();

    try {
        const { username, email, password } = await req.json();

        // Find user by username or email
        const user = await User.findOne({ $or: [{ username }, { email }] });
        
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User does not exist. Please register.",
            }, { status: 404 });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({
                success: false,
                message: "Invalid password.",
            }, { status: 401 });
        }

        // Password is valid, prepare success response
        return NextResponse.json({
            success: true,
            data: {
                id: user._id,
                username: user.username,
                email: user.email
                // Add other user fields as needed
            },
        }, { status: 200 });

    } catch (error) {
        console.error("Error signing in user:", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error. Please try again later.",
        }, { status: 500 });
    }
}
