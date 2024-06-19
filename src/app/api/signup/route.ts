import connectDB from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest , res : NextResponse) {
    await connectDB();

    try {
        const { username, email, password } = await req.json();

        if (!username || !email || !password  === undefined) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required',
            }, { status: 400 });
        }

        const existingUserByEmail = await User.findOne({ email });
        const existingUserByUsername = await User.findOne({ username });

        if (existingUserByEmail || existingUserByUsername) {
            return NextResponse.json({
                success: false,
                message: 'Email or Username is already registered',
            }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            username,
            password: hashedPassword
           
        });
        

        return NextResponse.json({
            success: true,
            data: newUser,
        }, { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        let errorMessage = "Error creating user";
        
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === 'string') {
            errorMessage = error;
        } else if (typeof error === 'object' && error !== null) {
            errorMessage = JSON.stringify(error);
        }
        
        return NextResponse.json({
            success: false,
            error: errorMessage,
        }, { status: 500 });
    }
}
